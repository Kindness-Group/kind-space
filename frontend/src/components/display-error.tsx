type Props = {
    error?: string
}

export function DisplayError(props: Props) {
    const {error} = props;
    if(error) {
        return <>
        <output
            className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800"
            role="alert">
            {error}
        </output>
        </>
    }
}

export function DisplayImageError(props: any) {
    const {error} = props;
    if(error) {
        return <>
            <output
               className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800"
               role="alert">
                {error}
            </output>
        </>
    }
}