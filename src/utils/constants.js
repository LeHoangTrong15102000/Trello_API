// Những DOMAIN được phép truy cập tới tài nguyên của SERVER
export const WHITELIST_DOMAINS = [
  'https://trello-clone-myproject.vercel.app'
  // 'http://localhost:3000' // Không cần localhost nữa vì ở file config/cors đã luôn luôn cho phép môi trường dev (env.BUILD_MODE === 'dev')
  // Ví dự sau này sẽ deploy lên domain chính thức ,...vvv
]

export const BOARD_TYPES = {
  PUBLIC: 'public',
  PRIVATE: 'private'
}
