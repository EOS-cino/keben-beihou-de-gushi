/**
 * 作者解析工具
 *
 * 将课文的 author 字段（可能是单个作者、多个作者组合、带注释的作者等）
 * 解析为独立的作者名数组，用于作者聚合页面正确分组。
 */

// 需要排除的"非个人"作者名（完全匹配）
const excludedAuthorExact = new Set([
  "佚名",
  "无名氏",
  "不详",
  "佚名（教材改编）",
  "佚名（民间故事）",
  "佚名（神话）",
  "佚名（班固改编）",
  "佚名（庄子改编）",
  "人民教育出版社编",
  "统编教材",
  "民间故事",
  "民间童谣",
  "民间歌谣",
  "希腊神话",
  "汉乐府",
  "《战国策》",
  "选自儿童文学童话",
  "（据新闻报道编写）",
  "（根据科普资料编写）",
  "（据战地报道编写）",
  "据伊索寓言改编",
  "据意大利童话改编",
  "伊索寓言（改写）",
  "（据《韩非子》改编）",
  "（据《列子》改编）",
  "（据德国柏吉尔科普作品改编）",
  "（根据燕志俊散文改编）",
  "司马迁相关故事",
  "韩非子相关寓言",
]);

/**
 * 判断一个作者名是否应该被排除（不出现在作者聚合中）
 */
export function isExcludedAuthor(author: string): boolean {
  const trimmed = author.trim();
  if (excludedAuthorExact.has(trimmed)) return true;
  // 以"据"开头、以"编写/改编"结尾的描述性文字
  if (/^据.+[编写改编]$/.test(trimmed)) return true;
  // 以"（据"开头
  if (/^[（(]据/.test(trimmed)) return true;
  return false;
}

/**
 * 将 author 字符串解析为独立作者名数组
 *
 * 处理规则：
 * 1. "X（著）Y（译）" → 只取 X（原作者）
 * 2. "X（郑振铎译）" / "X（译）" → 取 X
 * 3. "X（俄国）" / "X（丹麦）" 等国别注释 → 去掉括号取 X
 * 4. "X等" → 取 X（"等"表示还有其他作者，但只归属已知名）
 * 5. 用 、 / ／ ， , 分隔多个作者
 * 6. 空格分隔多个作者（如 "陆游 林升 龚自珍"）
 */
export function parseAuthors(authorStr: string): string[] {
  let cleaned = authorStr.trim();

  // 规则1: "X（著）Y（译）" → 只取 X
  const authorTranslatorMatch = cleaned.match(/^([^\s（(]+)\s*（著）.*（译）/);
  if (authorTranslatorMatch) {
    return [authorTranslatorMatch[1].trim()];
  }

  // 规则2: "X（某某译）" 或 "X（译）" → 取 X
  const translatorMatch = cleaned.match(/^([^\s（(]+)\s*（[^）]*译）/);
  if (translatorMatch) {
    return [translatorMatch[1].trim()];
  }

  // 规则3: 去掉所有括号注释（国别、著、改编等）
  cleaned = cleaned.replace(/（[^）]*）/g, "").replace(/\([^)]*\)/g, "");

  // 规则4: 去掉末尾的"等"
  cleaned = cleaned.replace(/等$/, "").trim();

  // 规则5: 用分隔符拆分
  let parts = cleaned
    .split(/[、／/，，]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  // 规则6: 如果只有一个部分且包含空格，按空格拆分
  if (parts.length === 1 && /\s+/.test(parts[0])) {
    parts = parts[0]
      .split(/\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }

  return parts;
}

/**
 * 将作者名转为 URL 安全的 slug
 */
export function authorSlug(name: string): string {
  return name
    .trim()
    .replace(/[\/\\?#]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * 获取一篇课文的全部有效作者（已排除非个人作者）
 */
export function getLessonAuthors(authorStr: string): string[] {
  return parseAuthors(authorStr).filter((a) => !isExcludedAuthor(a));
}
