import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type UseCustomNavigateReturnType = {
	goTo: (to: string) => void;
};
export const useCustomNavigate = (): UseCustomNavigateReturnType => {
	const navigation = useNavigate();
	const goTo = (to: string): void => {
		navigation(to);
		return;
	};

	return { goTo };
};

type SizeWindow = {
	width: number;
	height: number;
};

export const useResizeWindow = (): SizeWindow => {
	const [windowSize, setWindowSize] = useState<SizeWindow>({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	useEffect(() => {
		function handleResize(): void {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return windowSize;
};
