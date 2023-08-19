
export default function InputField(props) {
    return (
        <>
            <div className={`flex flex-col w-full ${props.class}`}>
                <label className="my-2 mx-5 text-sm font-black">{props.label}</label>
                <div className={props.inputClass}>
                    <input type="text" className="w-full h-full" placeholder={props.placeholder} />
                </div>
            </div>
        </>
    )
}