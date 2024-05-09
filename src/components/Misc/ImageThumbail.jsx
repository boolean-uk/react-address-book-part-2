import React from "react";
import { Image } from "react-bootstrap";
import styles from "./image-thumbail.module.css";
import placeholder from "../../media/user-image-placeholder.png";
export default function ImageThumbnail({ src, ...props }) {
	return (
		<Image
			className={styles.image}
			src={src || placeholder}
			{...props}></Image>
	);
}
