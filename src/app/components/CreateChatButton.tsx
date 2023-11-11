"use client";
import { Button } from '@/components/ui/button';
import { MessageSquarePlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const CreateChatButton = () => {

  const router  = useRouter();

  const createNewChat = async () => {
    router.push('/chat/new')
  }

  return (
    <Button onClick={createNewChat} variant={'ghost'} >
      <MessageSquarePlusIcon
        className='text-black dark:text-white'/>
    </Button>
  )
}

export default CreateChatButton