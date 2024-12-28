import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface UserOptProps {
    trigger: React.ReactElement,
    content?: React.ReactElement
}

const UserOpt: React.FC<UserOptProps> = ({
    trigger,
    content
}) => {
    return (
        <Dialog>
            <DialogTrigger>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete user's account
                        and remove data from our servers.
                    </DialogDescription>
                </DialogHeader>
                {content}
            </DialogContent>
        </Dialog>
    )
}

export default UserOpt