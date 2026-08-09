const TitleHeader = ({ title }: { title: string }) => {
    return (
        <div className="flex justify-center items-center font-semibold md:text-5xl text-3xl text-center text-blue-100">
            {title}
        </div>
    )
}

export default TitleHeader