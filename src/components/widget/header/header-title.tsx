type HeaderTitleProps = {
    title: string
}

export function HeaderTitle({title}: HeaderTitleProps){
    return <b>
        {title}
    </b>
}