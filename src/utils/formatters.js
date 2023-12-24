/**
 * YouTube: TrungQuanDev - Một Lập Trình Viên
 * Created by trungquandev.com's author on Sep 27, 2023
 */
/**
 * Simple method to Convert a String to Slug
 * Các bạn có thể tham khảo thêm kiến thức liên quan ở đây: https://byby.dev/js-slugify-string
 */

// export const slugify = (val) => {
//   if (!val) return ''
//   const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
//   const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
//   const p = new RegExp(a.split('').join('|'), 'g')
//   return val
//     .toString()
//     .normalize('NFKD')
//     .replace(/[\u0300-\u036f]/g, '')
//     .trim()
//     .toLowerCase()
//     .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
//     .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
//     .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
//     .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
//     .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
//     .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
//     .replace(/đ/gi, 'd')
//     .replace(/\s+/g, '-')
//     .replace(p, (c) => b.charAt(a.indexOf(c)))
//     .replace(/&/g, '-and-')
//     .replace(/[^\w\-]+/g, '')
//     .replace(/\-\-+/g, '-')
//     .replace(/^-+/, '')
//     .replace(/-+$/, '')
// }

export const slugify = (val) => {
  if (!val) return ''
  return String(val)
    .normalize('NFKD')
    .replaceAll('đ', 'd') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-') // remove consecutive hyphens
}
