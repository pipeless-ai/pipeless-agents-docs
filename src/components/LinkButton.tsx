export default function LinkButton({href, text}: any) {
    return <a href={href} target="_blank" className="bg-blue-100 text-blue-700 rounded-md px-4 py-2 hover:shadow">{text}</a>
}
