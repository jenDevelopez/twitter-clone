import PostCard from "./post-card"
import { type Post } from '@/app/types/posts'
export default function PostsList({ posts }: { posts: Post[] | null}) {
  return (
    <>
        {
        posts?.map(post => {
          const { 
            id, 
            content,
            user,
          } = post
          
          const {
            user_name: userName,
            name: userFullName,
            avatar_url: avatarUrl 
          } = user
          return (
            
            <PostCard 
              key={id}
              content={content}
              userFullName={userFullName}
              userName={userName}
              avatarUrl={avatarUrl}
              />   
          )
        })
      }
    </>
  )
}
