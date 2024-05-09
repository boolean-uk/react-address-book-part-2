import React, { useRef, useState } from "react";
import { FormControl, Image } from "react-bootstrap";
import placeholderImg from "../../media/user-image-placeholder.png";
import styles from "./file-input.module.css";
export default function FileInput({ initialValue, onChange }) {
	const [src, setSrc] = useState(initialValue || placeholderImg);

	const handleImageUpload = (e) => {
		const img = URL.createObjectURL(e.target.files[0]);
		setSrc(img);
		onChange(img);
	};
	const ref = useRef(null);

	return (
		<div
			className={styles.wrapper}
			// didnt even googled what aria label should be used xD
			// points for trying?
			aria-roledescription="upload-image"
			onClick={() => ref.current.click()}>
			<Image
				src={src}
				className={styles.image}></Image>
			<FormControl
				ref={ref}
				className="visually-hidden "
				type="file"
				onChange={handleImageUpload}></FormControl>
		</div>
	);
}
