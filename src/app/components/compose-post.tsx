'use client'
import { useRef } from "react"
import { ComposePostButton } from "./compose-post-button"
import { addPost } from "../actions/add-post-action"

export default function ComposePost({userAvatarUrl}:{userAvatarUrl: string}) {

    const formRef = useRef<HTMLFormElement>(null)
 return(
    <>
        <form ref={formRef} action={async (formData) => {
            await addPost(formData)
            formRef.current?.reset()
        }}  className="flex flex-row space-x-4 p-4 border-b border-white-20">
            <img className="rounded-full h-10 w-10 object-contain" src={userAvatarUrl} />
            <div className="flex flex-1 flex-col gap-y-4">
            <textarea
            
            name="content"
            rows={4}
            className=" p-2 w-full text-xl bg-clack placeholder-gray-500" placeholder="¡¿Qué está pasando?!">
            </textarea>
                 <ComposePostButton />

            </div>
            
        </form>
    </>
 )
  
}
