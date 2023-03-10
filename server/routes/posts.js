import { Router } from "express"
import { 
    createPost, 
    getAll, 
    getById, 
    getMyPosts, 
    updatePost, 
    removePost,
    getPostComments } from "../controllers/posts.js"
import { checkAuth } from "../utils/chechAuth.js"

//создаём endpointы и при выполнении на них запроса вызываем нужный котроллер или midlware
//midlware checkAuth нужен для расшифровки id пользователя и передачи его далее
const router = new Router()

//Создание поста
//http://localhost:8080/api/posts
router.post('/', checkAuth, createPost)

//Найти все посты
//http://localhost:8080/api/posts
router.get('/', getAll)

//Найти пост по ID
//http://localhost:8080/api/posts/:id
router.get('/:id', getById)

//Найти посты авторизованного пользователя
//http://localhost:8080/api/posts/user/me
router.get('/user/me', checkAuth, getMyPosts)

//Редактировать пост
//http://localhost:8080/api/posts/:id
router.put('/:id', checkAuth, updatePost)

//Удаление поста
//http://localhost:8080/api/posts/:id
router.delete('/:id', checkAuth, removePost)

//Получить комментарии к посту
//http://localhost:8080/api/posts/comments/:id
router.get('/comments/:id', getPostComments)

export default router