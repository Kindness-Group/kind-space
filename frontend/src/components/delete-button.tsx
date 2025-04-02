'use client'

import {DeleteAct} from "@/utils/models/act/act.action";

type Props = {
    actId: string,
}

export function DeleteButton(props: Props) {
    const {actId} = props;
    const handleDelete = async () => {
        await DeleteAct(actId)
    }
return (
    <>
        <span onClick={handleDelete}> X </span>
    </>
)
}