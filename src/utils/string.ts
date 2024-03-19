import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';

export const convertToFullWidth = (text: string | undefined) => {
	return (
		text &&
		text
			.replace(/\s/g, '') // Replace space
			.replace(/[!-~]/g, fullWidthChar =>
				String.fromCharCode(fullWidthChar.charCodeAt(0) + 0xfee0)
			)
	);
};

export const limitInputValue = <T extends FieldValues>(
	callback: UseFormSetValue<T>,
	key: Path<T>,
	limit: number,
	text?: string
) => {
	if (!text || text.length < limit) {
		return;
	}

	callback(key, <PathValue<T, Path<T>>>text.slice(0, limit));
};
