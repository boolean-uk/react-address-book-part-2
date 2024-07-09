import { LabelInputProps } from '../../../model'

export default function LabelInput({
    name,
    label,
    type,
    onChange,
    value,
}: LabelInputProps) {
    return (
        <div className='label-input'>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onInput={(e: any) => onChange(e.target.value)}
            />
        </div>
    )
}
