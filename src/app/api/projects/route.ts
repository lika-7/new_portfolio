import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: process.env.NOTION_API_KEY, // 환경변수로 변경 권장
});

const databaseId = process.env.NOTION_DATABASE_ID || ""; // 환경변수 사용

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        //   {
        //     property: "Created",
        //     direction: "descending",
        //   },
      ],
    });
    const page = response.results[0] as PageObjectResponse;

    const projects = response.results
      .map((page: any) => {
        const props = page.properties;
        let thumbnail = "";
        if (page.cover) {
          if (page.cover.type === "external") {
            thumbnail = page.cover.external.url;
          } else if (page.cover.type === "file") {
            thumbnail = page.cover.file.url;
          }
        } else {
          thumbnail = "logo.png";
        }

        const title = props.name?.title?.[0]?.plain_text || "Untitled";

        // 숫자 prefix 추출: "18. 제목" → 18
        const orderNumberMatch = title.match(/^(\d+)\./);
        const orderNumber = orderNumberMatch
          ? parseInt(orderNumberMatch[1], 10)
          : 0;

        return {
          id: page.id,
          title,
          description: props.description?.rich_text?.[0]?.plain_text || "",
          thumbnail,
          notionUrl: page.url,
          tags: props.tag?.multi_select?.map((tag: any) => tag.name) || [],
          createdAt: page.created_time,
          orderNumber, // 정렬용
        };
      })
      .sort((a, b) => b.orderNumber - a.orderNumber); // 숫자가 클수록 앞에 오도록 정렬

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Notion 데이터 요청 실패:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
