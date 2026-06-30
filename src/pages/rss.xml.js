import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const lessons = (await getCollection("lessons")).sort((a, b) => {
    return b.data.title.localeCompare(a.data.title, "zh-CN");
  });

  return rss({
    title: "课文背后的故事",
    description: "面向小学生的语文课文背景故事，用故事、人物和时代背景激发阅读兴趣。",
    site: context.site,
    items: lessons.map((lesson) => ({
      title: `《${lesson.data.title}》背后的故事`,
      description: lesson.data.summary,
      pubDate: new Date(),
      link: `/lessons/${lesson.slug}/`,
      categories: [lesson.data.grade, lesson.data.theme],
    })),
    customData: `<language>zh-cn</language>`,
  });
}
