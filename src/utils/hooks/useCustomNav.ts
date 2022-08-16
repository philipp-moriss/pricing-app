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
