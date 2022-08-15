import { Button } from '../../components/UiComponent/Button/Button';
import { NavBar } from '../NavBar/NavBar';
import styles from './Header.module.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = (): React.ReactElement => {
	const [show, setShow] = useState(true);
	const toggleMenu = (): void => {
		if (!show) {
			document.body.style.overflow = 'auto';
		} else {
			document.body.style.overflow = 'hidden';
		}
		setShow(!show);
	};
	const navigate = useNavigate();
	return (
		<header className={styles['header']}>
			<button className={styles['burger-button']} onClick={toggleMenu}>
				<span className={`${styles['burger-line']} ${!show && styles['burger-line-active']}`} />
			</button>
			<div className={`${styles['header-wrapper']} ${!show && styles['header-wrapper-show']}`}>
				<div className={styles['header-logo']}>
					<svg
						width="81"
						height="44"
						viewBox="0 0 81 44"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M36 0L36 44" stroke="#550152" strokeOpacity="0.5" />
						<path d="M35 0V44" stroke="#F27B0E" />
						<path
							d="M49.4814 16.3755H47.0122V15.3789H49.4814C49.9596 15.3789 50.3468 15.3027 50.6431 15.1504C50.9393 14.998 51.1551 14.7865 51.2905 14.5156C51.4302 14.2448 51.5 13.9359 51.5 13.5889C51.5 13.2715 51.4302 12.9731 51.2905 12.6938C51.1551 12.4146 50.9393 12.1903 50.6431 12.021C50.3468 11.8475 49.9596 11.7607 49.4814 11.7607H47.2979V20H46.0728V10.7578H49.4814C50.1797 10.7578 50.77 10.8784 51.2524 11.1196C51.7349 11.3608 52.1009 11.6951 52.3506 12.1226C52.6003 12.5457 52.7251 13.0303 52.7251 13.5762C52.7251 14.1686 52.6003 14.6743 52.3506 15.0933C52.1009 15.5122 51.7349 15.8317 51.2524 16.0518C50.77 16.2676 50.1797 16.3755 49.4814 16.3755ZM61.3896 15.0869V15.6709C61.3896 16.3649 61.3029 16.987 61.1294 17.5371C60.9559 18.0872 60.7062 18.5549 60.3804 18.9399C60.0545 19.325 59.6631 19.6191 59.2061 19.8223C58.7533 20.0254 58.2454 20.127 57.6826 20.127C57.1367 20.127 56.6353 20.0254 56.1782 19.8223C55.7254 19.6191 55.3319 19.325 54.9976 18.9399C54.6675 18.5549 54.4115 18.0872 54.2295 17.5371C54.0475 16.987 53.9565 16.3649 53.9565 15.6709V15.0869C53.9565 14.3929 54.0454 13.7729 54.2231 13.2271C54.4051 12.6769 54.6611 12.2093 54.9912 11.8242C55.3213 11.4349 55.7127 11.1387 56.1655 10.9355C56.6226 10.7324 57.124 10.6309 57.6699 10.6309C58.2327 10.6309 58.7406 10.7324 59.1934 10.9355C59.6504 11.1387 60.0418 11.4349 60.3677 11.8242C60.6978 12.2093 60.9495 12.6769 61.123 13.2271C61.3008 13.7729 61.3896 14.3929 61.3896 15.0869ZM60.1772 15.6709V15.0742C60.1772 14.5241 60.1201 14.0374 60.0059 13.6143C59.8958 13.1911 59.7329 12.8356 59.5171 12.5479C59.3013 12.2601 59.0368 12.0422 58.7236 11.894C58.4147 11.7459 58.0635 11.6719 57.6699 11.6719C57.2891 11.6719 56.9442 11.7459 56.6353 11.894C56.3306 12.0422 56.0682 12.2601 55.8481 12.5479C55.6323 12.8356 55.4652 13.1911 55.3467 13.6143C55.2282 14.0374 55.1689 14.5241 55.1689 15.0742V15.6709C55.1689 16.2253 55.2282 16.7161 55.3467 17.1436C55.4652 17.5667 55.6344 17.9243 55.8545 18.2163C56.0788 18.5041 56.3433 18.722 56.6479 18.8701C56.9569 19.0182 57.3018 19.0923 57.6826 19.0923C58.0804 19.0923 58.4338 19.0182 58.7427 18.8701C59.0516 18.722 59.3118 18.5041 59.5234 18.2163C59.7393 17.9243 59.9022 17.5667 60.0122 17.1436C60.1222 16.7161 60.1772 16.2253 60.1772 15.6709ZM70.3335 10.7578V20H69.1021L64.4492 12.8716V20H63.2241V10.7578H64.4492L69.1211 17.9053V10.7578H70.3335ZM72.752 10.7578L75.1514 15.3979L77.5571 10.7578H78.9473L75.7607 16.5469V20H74.5356V16.5469L71.3491 10.7578H72.752ZM48.5039 30.207L50.3384 23.7578H51.2271L50.7129 26.2651L48.7388 33H47.8564L48.5039 30.207ZM46.606 23.7578L48.0659 30.0801L48.5039 33H47.6279L45.3872 23.7578H46.606ZM53.6011 30.0737L55.0293 23.7578H56.2544L54.02 33H53.144L53.6011 30.0737ZM51.3604 23.7578L53.144 30.207L53.7915 33H52.9092L51.0049 26.2651L50.4844 23.7578H51.3604ZM63.4844 32.0034V33H58.5903V32.0034H63.4844ZM58.8379 23.7578V33H57.6128V23.7578H58.8379ZM62.8369 27.7314V28.728H58.5903V27.7314H62.8369ZM63.4209 23.7578V24.7607H58.5903V23.7578H63.4209ZM68.2959 28.6772H65.9536L65.9409 27.6934H68.0674C68.4186 27.6934 68.7254 27.6341 68.9878 27.5156C69.2502 27.3971 69.4533 27.2279 69.5972 27.0078C69.7453 26.7835 69.8193 26.5169 69.8193 26.208C69.8193 25.8695 69.7537 25.5944 69.6226 25.3828C69.4956 25.167 69.2988 25.0104 69.0322 24.9131C68.7699 24.8115 68.4355 24.7607 68.0293 24.7607H66.2266V33H65.0015V23.7578H68.0293C68.5033 23.7578 68.9264 23.8065 69.2988 23.9038C69.6712 23.9969 69.9865 24.145 70.2446 24.3481C70.507 24.547 70.7059 24.8009 70.8413 25.1099C70.9767 25.4188 71.0444 25.7891 71.0444 26.2207C71.0444 26.6016 70.9471 26.9465 70.7524 27.2554C70.5578 27.5601 70.2869 27.8097 69.9399 28.0044C69.5972 28.1991 69.1951 28.3239 68.7339 28.3789L68.2959 28.6772ZM68.2388 33H65.4712L66.1631 32.0034H68.2388C68.6281 32.0034 68.9582 31.9357 69.229 31.8003C69.5041 31.6649 69.7135 31.4744 69.8574 31.229C70.0013 30.9793 70.0732 30.6852 70.0732 30.3467C70.0732 30.0039 70.0119 29.7077 69.8892 29.458C69.7664 29.2083 69.5739 29.0158 69.3115 28.8804C69.0492 28.745 68.7106 28.6772 68.2959 28.6772H66.5503L66.563 27.6934H68.9497L69.21 28.0488C69.6543 28.0869 70.0309 28.2139 70.3398 28.4297C70.6488 28.6413 70.8836 28.9121 71.0444 29.2422C71.2095 29.5723 71.292 29.9362 71.292 30.334C71.292 30.9095 71.165 31.3962 70.9111 31.7939C70.6615 32.1875 70.3081 32.488 69.8511 32.6953C69.394 32.8984 68.8566 33 68.2388 33Z"
							fill="#F27B0E"
						/>
						<path
							d="M47.0122 16.3755H46.0122V17.3755H47.0122V16.3755ZM47.0122 15.3789V14.3789H46.0122V15.3789H47.0122ZM51.2905 14.5156L50.4017 14.0573L50.3961 14.0684L51.2905 14.5156ZM51.2905 12.6938L50.3906 13.1302L50.3961 13.1411L51.2905 12.6938ZM50.6431 12.021L50.1376 12.8839L50.1469 12.8892L50.6431 12.021ZM47.2979 11.7607V10.7607H46.2979V11.7607H47.2979ZM47.2979 20V21H48.2979V20H47.2979ZM46.0728 20H45.0728V21H46.0728V20ZM46.0728 10.7578V9.75781H45.0728V10.7578H46.0728ZM52.3506 12.1226L51.4871 12.627L51.4893 12.6307L52.3506 12.1226ZM51.2524 16.0518L51.6608 16.9646L51.6674 16.9616L51.2524 16.0518ZM49.4814 15.3755H47.0122V17.3755H49.4814V15.3755ZM48.0122 16.3755V15.3789H46.0122V16.3755H48.0122ZM47.0122 16.3789H49.4814V14.3789H47.0122V16.3789ZM49.4814 16.3789C50.0541 16.3789 50.6147 16.2895 51.1004 16.0397L50.1857 14.2611C50.079 14.316 49.8652 14.3789 49.4814 14.3789V16.3789ZM51.1004 16.0397C51.5657 15.8004 51.945 15.4428 52.185 14.9628L50.3961 14.0684C50.3653 14.1301 50.3129 14.1957 50.1857 14.2611L51.1004 16.0397ZM52.1793 14.9739C52.4016 14.5428 52.5 14.073 52.5 13.5889H50.5C50.5 13.7987 50.4587 13.9468 50.4017 14.0573L52.1793 14.9739ZM52.5 13.5889C52.5 13.1189 52.3952 12.6671 52.185 12.2466L50.3961 13.1411C50.4651 13.2792 50.5 13.4241 50.5 13.5889H52.5ZM52.1903 12.2576C51.9583 11.779 51.5923 11.4117 51.1392 11.1528L50.1469 12.8892C50.2863 12.9689 50.3519 13.0501 50.3907 13.1301L52.1903 12.2576ZM51.1485 11.1581C50.6502 10.8663 50.0708 10.7607 49.4814 10.7607V12.7607C49.8485 12.7607 50.0434 12.8287 50.1377 12.8839L51.1485 11.1581ZM49.4814 10.7607H47.2979V12.7607H49.4814V10.7607ZM46.2979 11.7607V20H48.2979V11.7607H46.2979ZM47.2979 19H46.0728V21H47.2979V19ZM47.0728 20V10.7578H45.0728V20H47.0728ZM46.0728 11.7578H49.4814V9.75781H46.0728V11.7578ZM49.4814 11.7578C50.0686 11.7578 50.4964 11.8596 50.8052 12.0141L51.6997 10.2252C51.0436 9.8972 50.2908 9.75781 49.4814 9.75781V11.7578ZM50.8052 12.0141C51.1302 12.1765 51.3441 12.3822 51.4871 12.627L53.2141 11.6182C52.8577 11.0081 52.3395 10.5451 51.6997 10.2252L50.8052 12.0141ZM51.4893 12.6307C51.6383 12.8833 51.7251 13.1886 51.7251 13.5762H53.7251C53.7251 12.8719 53.5622 12.2082 53.2119 11.6144L51.4893 12.6307ZM51.7251 13.5762C51.7251 14.0271 51.631 14.3474 51.4916 14.5813L53.2096 15.6052C53.5695 15.0013 53.7251 14.3101 53.7251 13.5762H51.7251ZM51.4916 14.5813C51.3551 14.8102 51.1518 14.9986 50.8374 15.1419L51.6674 16.9616C52.318 16.6649 52.8467 16.2142 53.2096 15.6052L51.4916 14.5813ZM50.8441 15.1389C50.5243 15.282 50.082 15.3755 49.4814 15.3755V17.3755C50.2774 17.3755 51.0157 17.2532 51.6608 16.9646L50.8441 15.1389ZM59.2061 19.8223L58.7999 18.9084L58.7968 18.9099L59.2061 19.8223ZM56.1782 19.8223L55.7689 20.7347L55.7721 20.7361L56.1782 19.8223ZM54.9976 18.9399L54.2383 19.5907L54.2424 19.5955L54.9976 18.9399ZM54.2231 13.2271L53.2737 12.913L53.2723 12.9175L54.2231 13.2271ZM54.9912 11.8242L55.7505 12.475L55.754 12.4709L54.9912 11.8242ZM56.1655 10.9355L55.7594 10.0217L55.7562 10.0231L56.1655 10.9355ZM59.1934 10.9355L58.7841 11.848L58.7872 11.8494L59.1934 10.9355ZM60.3677 11.8242L59.6008 12.4661L59.6084 12.475L60.3677 11.8242ZM61.123 13.2271L60.1693 13.5278L60.1722 13.5366L61.123 13.2271ZM60.0059 13.6143L59.038 13.8659L59.0404 13.8749L60.0059 13.6143ZM58.7236 11.894L58.2913 12.7958L58.2961 12.798L58.7236 11.894ZM56.6353 11.894L56.2029 10.9923L56.1981 10.9947L56.6353 11.894ZM55.8481 12.5479L55.0538 11.9404L55.0481 11.9479L55.8481 12.5479ZM55.3467 17.1436L54.383 17.4107L54.3837 17.4132L55.3467 17.1436ZM55.8545 18.2163L55.0559 18.8182L55.0608 18.8246L55.0658 18.8311L55.8545 18.2163ZM56.6479 18.8701L56.2108 19.7695L56.2156 19.7718L56.6479 18.8701ZM59.5234 18.2163L58.7193 17.6219L58.7178 17.6239L59.5234 18.2163ZM60.0122 17.1436L60.98 17.3952L60.9806 17.3929L60.0122 17.1436ZM60.3896 15.0869V15.6709H62.3896V15.0869H60.3896ZM60.3896 15.6709C60.3896 16.2829 60.313 16.8009 60.1757 17.2363L62.0831 17.8379C62.2928 17.173 62.3896 16.4469 62.3896 15.6709H60.3896ZM60.1757 17.2363C60.0364 17.678 59.8457 18.0237 59.617 18.294L61.1438 19.5859C61.5667 19.086 61.8754 18.4965 62.0831 17.8379L60.1757 17.2363ZM59.617 18.294C59.3876 18.565 59.118 18.7671 58.7999 18.9085L59.6122 20.7361C60.2082 20.4712 60.7214 20.085 61.1438 19.5859L59.617 18.294ZM58.7968 18.9099C58.4889 19.048 58.1233 19.127 57.6826 19.127V21.127C58.3676 21.127 59.0176 21.0028 59.6154 20.7347L58.7968 18.9099ZM57.6826 19.127C57.2637 19.127 56.9022 19.0497 56.5844 18.9085L55.7721 20.7361C56.3683 21.0011 57.0097 21.127 57.6826 21.127V19.127ZM56.5875 18.9099C56.271 18.7679 55.9945 18.5629 55.7527 18.2844L54.2424 19.5955C54.6693 20.0872 55.1798 20.4704 55.7689 20.7347L56.5875 18.9099ZM55.7568 18.2892C55.5226 18.0159 55.3258 17.6671 55.1789 17.2231L53.2801 17.8511C53.4971 18.5074 53.8123 19.0938 54.2383 19.5907L55.7568 18.2892ZM55.1789 17.2231C55.0363 16.792 54.9565 16.2787 54.9565 15.6709H52.9565C52.9565 16.4512 53.0587 17.182 53.2801 17.8511L55.1789 17.2231ZM54.9565 15.6709V15.0869H52.9565V15.6709H54.9565ZM54.9565 15.0869C54.9565 14.4768 55.0348 13.9642 55.174 13.5366L53.2723 12.9175C53.056 13.5817 52.9565 14.309 52.9565 15.0869H54.9565ZM55.1726 13.5411C55.3194 13.097 55.5163 12.7482 55.7505 12.475L54.232 11.1734C53.806 11.6704 53.4908 12.2568 53.2737 12.913L55.1726 13.5411ZM55.754 12.4709C55.9904 12.1921 56.2621 11.9882 56.5748 11.8479L55.7562 10.0231C55.1633 10.2891 54.6522 10.6777 54.2285 11.1775L55.754 12.4709ZM56.5717 11.8494C56.8895 11.7081 57.251 11.6309 57.6699 11.6309V9.63086C56.997 9.63086 56.3556 9.75676 55.7594 10.0217L56.5717 11.8494ZM57.6699 11.6309C58.1106 11.6309 58.4762 11.7098 58.7841 11.8479L59.6027 10.0231C59.0049 9.75501 58.3549 9.63086 57.6699 9.63086V11.6309ZM58.7872 11.8494C59.1027 11.9896 59.3714 12.1919 59.6008 12.466L61.1345 11.1824C60.7123 10.6779 60.1981 10.2878 59.5995 10.0217L58.7872 11.8494ZM59.6084 12.475C59.8395 12.7446 60.0309 13.0887 60.1694 13.5278L62.0767 12.9263C61.8682 12.2651 61.556 11.674 61.1269 11.1734L59.6084 12.475ZM60.1722 13.5366C60.3114 13.9642 60.3896 14.4768 60.3896 15.0869H62.3896C62.3896 14.309 62.2902 13.5817 62.0739 12.9175L60.1722 13.5366ZM61.1772 15.6709V15.0742H59.1772V15.6709H61.1772ZM61.1772 15.0742C61.1772 14.4574 61.1135 13.8801 60.9713 13.3536L59.0404 13.8749C59.1268 14.1947 59.1772 14.5908 59.1772 15.0742H61.1772ZM60.9737 13.3626C60.8378 12.84 60.6259 12.3595 60.3171 11.9479L58.7171 13.1479C58.84 13.3117 58.9539 13.5422 59.038 13.8659L60.9737 13.3626ZM60.3171 11.9479C60.0076 11.5352 59.6171 11.2104 59.1512 10.9901L58.2961 12.798C58.4565 12.8739 58.595 12.985 58.7171 13.1479L60.3171 11.9479ZM59.156 10.9923C58.6934 10.7705 58.1909 10.6719 57.6699 10.6719V12.6719C57.9361 12.6719 58.1361 12.7213 58.2913 12.7958L59.156 10.9923ZM57.6699 10.6719C57.1563 10.6719 56.6612 10.7726 56.2029 10.9923L57.0676 12.7958C57.2271 12.7193 57.4218 12.6719 57.6699 12.6719V10.6719ZM56.1981 10.9947C55.7436 11.2156 55.3618 11.5376 55.0538 11.9404L56.6425 13.1553C56.7746 12.9826 56.9176 12.8687 57.0724 12.7934L56.1981 10.9947ZM55.0481 11.9479C54.7436 12.354 54.5284 12.8278 54.3837 13.3446L56.3096 13.8839C56.4019 13.5543 56.5211 13.3173 56.6481 13.1479L55.0481 11.9479ZM54.3837 13.3446C54.2354 13.8744 54.1689 14.4548 54.1689 15.0742H56.1689C56.1689 14.5934 56.221 14.2005 56.3096 13.8839L54.3837 13.3446ZM54.1689 15.0742V15.6709H56.1689V15.0742H54.1689ZM54.1689 15.6709C54.1689 16.2941 54.2353 16.8778 54.383 17.4107L56.3103 16.8764C56.2211 16.5545 56.1689 16.1564 56.1689 15.6709H54.1689ZM54.3837 17.4132C54.5292 17.9327 54.7473 18.4088 55.0559 18.8182L56.6531 17.6145C56.5215 17.4399 56.4011 17.2007 56.3096 16.8739L54.3837 17.4132ZM55.0658 18.8311C55.3766 19.2298 55.7583 19.5495 56.2108 19.7695L57.0851 17.9707C56.9282 17.8945 56.781 17.7783 56.6432 17.6016L55.0658 18.8311ZM56.2156 19.7718C56.6739 19.9916 57.169 20.0923 57.6826 20.0923V18.0923C57.4345 18.0923 57.2398 18.0449 57.0803 17.9684L56.2156 19.7718ZM57.6826 20.0923C58.206 20.0923 58.711 19.9943 59.175 19.7718L58.3103 17.9684C58.1565 18.0422 57.9548 18.0923 57.6826 18.0923V20.0923ZM59.175 19.7718C59.6382 19.5497 60.0246 19.2228 60.3291 18.8087L58.7178 17.6239C58.5991 17.7853 58.4649 17.8943 58.3103 17.9684L59.175 19.7718ZM60.3276 18.8107C60.6332 18.3973 60.8443 17.9174 60.98 17.3952L59.0444 16.8919C58.9601 17.2161 58.8453 17.4513 58.7193 17.6219L60.3276 18.8107ZM60.9806 17.3929C61.1162 16.8664 61.1772 16.2889 61.1772 15.6709H59.1772C59.1772 16.1616 59.1283 16.5659 59.0438 16.8943L60.9806 17.3929ZM70.3335 10.7578H71.3335V9.75781H70.3335V10.7578ZM70.3335 20V21H71.3335V20H70.3335ZM69.1021 20L68.2646 20.5466L68.5606 21H69.1021V20ZM64.4492 12.8716L65.2866 12.325L63.4492 9.50998V12.8716H64.4492ZM64.4492 20V21H65.4492V20H64.4492ZM63.2241 20H62.2241V21H63.2241V20ZM63.2241 10.7578V9.75781H62.2241V10.7578H63.2241ZM64.4492 10.7578L65.2863 10.2107L64.9903 9.75781H64.4492V10.7578ZM69.1211 17.9053L68.284 18.4524L70.1211 21.2629V17.9053H69.1211ZM69.1211 10.7578V9.75781H68.1211V10.7578H69.1211ZM69.3335 10.7578V20H71.3335V10.7578H69.3335ZM70.3335 19H69.1021V21H70.3335V19ZM69.9395 19.4534L65.2866 12.325L63.6118 13.4182L68.2646 20.5466L69.9395 19.4534ZM63.4492 12.8716V20H65.4492V12.8716H63.4492ZM64.4492 19H63.2241V21H64.4492V19ZM64.2241 20V10.7578H62.2241V20H64.2241ZM63.2241 11.7578H64.4492V9.75781H63.2241V11.7578ZM63.6122 11.3049L68.284 18.4524L69.9581 17.3581L65.2863 10.2107L63.6122 11.3049ZM70.1211 17.9053V10.7578H68.1211V17.9053H70.1211ZM69.1211 11.7578H70.3335V9.75781H69.1211V11.7578ZM72.752 10.7578L73.6402 10.2985L73.3606 9.75781H72.752V10.7578ZM75.1514 15.3979L74.2631 15.8573L75.1502 17.5728L76.0391 15.8582L75.1514 15.3979ZM77.5571 10.7578V9.75781H76.9492L76.6694 10.2975L77.5571 10.7578ZM78.9473 10.7578L79.8233 11.24L80.6392 9.75781H78.9473V10.7578ZM75.7607 16.5469L74.8847 16.0647L74.7607 16.2898V16.5469H75.7607ZM75.7607 20V21H76.7607V20H75.7607ZM74.5356 20H73.5356V21H74.5356V20ZM74.5356 16.5469H75.5356V16.2898L75.4117 16.0647L74.5356 16.5469ZM71.3491 10.7578V9.75781H69.6572L70.4731 11.24L71.3491 10.7578ZM71.8637 11.2171L74.2631 15.8573L76.0396 14.9386L73.6402 10.2985L71.8637 11.2171ZM76.0391 15.8582L78.4449 11.2181L76.6694 10.2975L74.2636 14.9377L76.0391 15.8582ZM77.5571 11.7578H78.9473V9.75781H77.5571V11.7578ZM78.0712 10.2756L74.8847 16.0647L76.6368 17.0291L79.8233 11.24L78.0712 10.2756ZM74.7607 16.5469V20H76.7607V16.5469H74.7607ZM75.7607 19H74.5356V21H75.7607V19ZM75.5356 20V16.5469H73.5356V20H75.5356ZM75.4117 16.0647L72.2252 10.2756L70.4731 11.24L73.6596 17.0291L75.4117 16.0647ZM71.3491 11.7578H72.752V9.75781H71.3491V11.7578ZM48.5039 30.207L47.5421 29.9334L47.5353 29.9572L47.5297 29.9812L48.5039 30.207ZM50.3384 23.7578V22.7578H49.5832L49.3765 23.4842L50.3384 23.7578ZM51.2271 23.7578L52.2067 23.9587L52.4529 22.7578H51.2271V23.7578ZM50.7129 26.2651L51.6725 26.5464L51.6842 26.5066L51.6925 26.466L50.7129 26.2651ZM48.7388 33V34H49.4877L49.6984 33.2813L48.7388 33ZM47.8564 33L46.8823 32.7742L46.5981 34H47.8564V33ZM46.606 23.7578L47.5803 23.5328L47.4013 22.7578H46.606V23.7578ZM48.0659 30.0801L49.0549 29.9317L49.0491 29.8931L49.0403 29.8551L48.0659 30.0801ZM48.5039 33V34H49.6651L49.4928 32.8517L48.5039 33ZM47.6279 33L46.6561 33.2356L46.8414 34H47.6279V33ZM45.3872 23.7578V22.7578H44.1158L44.4154 23.9934L45.3872 23.7578ZM53.6011 30.0737L52.6257 29.8532L52.6183 29.8861L52.6131 29.9194L53.6011 30.0737ZM55.0293 23.7578V22.7578H54.2302L54.0539 23.5373L55.0293 23.7578ZM56.2544 23.7578L57.2264 23.9928L57.525 22.7578H56.2544V23.7578ZM54.02 33V34H54.8071L54.992 33.235L54.02 33ZM53.144 33L52.156 32.8457L51.9757 34H53.144V33ZM51.3604 23.7578L52.3242 23.4912L52.1213 22.7578H51.3604V23.7578ZM53.144 30.207L54.1182 29.9812L54.1135 29.9607L54.1079 29.9405L53.144 30.207ZM53.7915 33V34H55.0498L54.7657 32.7742L53.7915 33ZM52.9092 33L51.9469 33.2721L52.1527 34H52.9092V33ZM51.0049 26.2651L50.0258 26.4684L50.033 26.5031L50.0426 26.5372L51.0049 26.2651ZM50.4844 23.7578V22.7578H49.2555L49.5053 23.9611L50.4844 23.7578ZM49.4658 30.4806L51.3002 24.0314L49.3765 23.4842L47.5421 29.9334L49.4658 30.4806ZM50.3384 24.7578H51.2271V22.7578H50.3384V24.7578ZM50.2474 23.5569L49.7333 26.0643L51.6925 26.466L52.2067 23.9587L50.2474 23.5569ZM49.7533 25.9839L47.7791 32.7187L49.6984 33.2813L51.6725 26.5464L49.7533 25.9839ZM48.7388 32H47.8564V34H48.7388V32ZM48.8306 33.2258L49.4781 30.4329L47.5297 29.9812L46.8823 32.7742L48.8306 33.2258ZM45.6316 23.9828L47.0916 30.3051L49.0403 29.8551L47.5803 23.5328L45.6316 23.9828ZM47.077 30.2284L47.515 33.1483L49.4928 32.8517L49.0549 29.9317L47.077 30.2284ZM48.5039 32H47.6279V34H48.5039V32ZM48.5998 32.7644L46.3591 23.5222L44.4154 23.9934L46.6561 33.2356L48.5998 32.7644ZM45.3872 24.7578H46.606V22.7578H45.3872V24.7578ZM54.5764 30.2943L56.0047 23.9784L54.0539 23.5373L52.6257 29.8532L54.5764 30.2943ZM55.0293 24.7578H56.2544V22.7578H55.0293V24.7578ZM55.2824 23.5228L53.048 32.765L54.992 33.235L57.2264 23.9928L55.2824 23.5228ZM54.02 32H53.144V34H54.02V32ZM54.1321 33.1543L54.5891 30.228L52.6131 29.9194L52.156 32.8457L54.1321 33.1543ZM50.3965 24.0244L52.1802 30.4736L54.1079 29.9405L52.3242 23.4912L50.3965 24.0244ZM52.1699 30.4329L52.8173 33.2258L54.7657 32.7742L54.1182 29.9812L52.1699 30.4329ZM53.7915 32H52.9092V34H53.7915V32ZM53.8715 32.7279L51.9672 25.9931L50.0426 26.5372L51.9469 33.2721L53.8715 32.7279ZM51.984 26.0619L51.4635 23.5546L49.5053 23.9611L50.0258 26.4684L51.984 26.0619ZM50.4844 24.7578H51.3604V22.7578H50.4844V24.7578ZM63.4844 32.0034H64.4844V31.0034H63.4844V32.0034ZM63.4844 33V34H64.4844V33H63.4844ZM58.5903 33H57.5903V34H58.5903V33ZM58.5903 32.0034V31.0034H57.5903V32.0034H58.5903ZM58.8379 23.7578H59.8379V22.7578H58.8379V23.7578ZM58.8379 33V34H59.8379V33H58.8379ZM57.6128 33H56.6128V34H57.6128V33ZM57.6128 23.7578V22.7578H56.6128V23.7578H57.6128ZM62.8369 27.7314H63.8369V26.7314H62.8369V27.7314ZM62.8369 28.728V29.728H63.8369V28.728H62.8369ZM58.5903 28.728H57.5903V29.728H58.5903V28.728ZM58.5903 27.7314V26.7314H57.5903V27.7314H58.5903ZM63.4209 23.7578H64.4209V22.7578H63.4209V23.7578ZM63.4209 24.7607V25.7607H64.4209V24.7607H63.4209ZM58.5903 24.7607H57.5903V25.7607H58.5903V24.7607ZM58.5903 23.7578V22.7578H57.5903V23.7578H58.5903ZM62.4844 32.0034V33H64.4844V32.0034H62.4844ZM63.4844 32H58.5903V34H63.4844V32ZM59.5903 33V32.0034H57.5903V33H59.5903ZM58.5903 33.0034H63.4844V31.0034H58.5903V33.0034ZM57.8379 23.7578V33H59.8379V23.7578H57.8379ZM58.8379 32H57.6128V34H58.8379V32ZM58.6128 33V23.7578H56.6128V33H58.6128ZM57.6128 24.7578H58.8379V22.7578H57.6128V24.7578ZM61.8369 27.7314V28.728H63.8369V27.7314H61.8369ZM62.8369 27.728H58.5903V29.728H62.8369V27.728ZM59.5903 28.728V27.7314H57.5903V28.728H59.5903ZM58.5903 28.7314H62.8369V26.7314H58.5903V28.7314ZM62.4209 23.7578V24.7607H64.4209V23.7578H62.4209ZM63.4209 23.7607H58.5903V25.7607H63.4209V23.7607ZM59.5903 24.7607V23.7578H57.5903V24.7607H59.5903ZM58.5903 24.7578H63.4209V22.7578H58.5903V24.7578ZM68.2959 28.6772V29.6772H68.6041L68.8589 29.5037L68.2959 28.6772ZM65.9536 28.6772L64.9537 28.6901L64.9664 29.6772H65.9536V28.6772ZM65.9409 27.6934V26.6934H64.9279L64.941 27.7063L65.9409 27.6934ZM69.5972 27.0078L68.7627 26.4567L68.7602 26.4606L69.5972 27.0078ZM69.6226 25.3828L68.7606 25.8898L68.7665 25.8999L68.7727 25.9098L69.6226 25.3828ZM69.0322 24.9131L68.6712 25.8457L68.6802 25.8491L68.6893 25.8524L69.0322 24.9131ZM66.2266 24.7607V23.7607H65.2266V24.7607H66.2266ZM66.2266 33V34H67.2266V33H66.2266ZM65.0015 33H64.0015V34H65.0015V33ZM65.0015 23.7578V22.7578H64.0015V23.7578H65.0015ZM69.2988 23.9038L69.0459 24.8714L69.0563 24.874L69.2988 23.9038ZM70.2446 24.3481L69.6262 25.134L69.6333 25.1396L69.6405 25.145L70.2446 24.3481ZM70.7524 27.2554L71.5952 27.7938L71.5985 27.7885L70.7524 27.2554ZM69.9399 28.0044L69.4507 27.1322L69.4461 27.1348L69.9399 28.0044ZM68.7339 28.3789L68.6155 27.3859L68.3729 27.4149L68.1709 27.5524L68.7339 28.3789ZM65.4712 33L64.6498 32.4297L63.5595 34H65.4712V33ZM66.1631 32.0034V31.0034H65.64L65.3416 31.4331L66.1631 32.0034ZM69.229 31.8003L68.7873 30.9031L68.7818 30.9059L69.229 31.8003ZM69.8574 31.229L70.7201 31.7347L70.7239 31.7283L69.8574 31.229ZM66.5503 28.6772L65.5504 28.6643L65.5373 29.6772H66.5503V28.6772ZM66.563 27.6934V26.6934H65.5758L65.5631 27.6805L66.563 27.6934ZM68.9497 27.6934L69.7566 27.1026L69.4569 26.6934H68.9497V27.6934ZM69.21 28.0488L68.4031 28.6396L68.6716 29.0064L69.1246 29.0452L69.21 28.0488ZM70.3398 28.4297L69.7671 29.2495L69.7748 29.2547L70.3398 28.4297ZM71.0444 29.2422L70.1454 29.6802L70.15 29.6894L71.0444 29.2422ZM70.9111 31.7939L70.0682 31.2559L70.0667 31.2582L70.9111 31.7939ZM69.8511 32.6953L70.2572 33.6092L70.2642 33.606L69.8511 32.6953ZM68.2959 27.6772H65.9536V29.6772H68.2959V27.6772ZM66.9535 28.6643L66.9408 27.6805L64.941 27.7063L64.9537 28.6901L66.9535 28.6643ZM65.9409 28.6934H68.0674V26.6934H65.9409V28.6934ZM68.0674 28.6934C68.53 28.6934 68.9824 28.6153 69.3994 28.427L68.5762 26.6043C68.4684 26.6529 68.3072 26.6934 68.0674 26.6934V28.6934ZM69.3994 28.427C69.8182 28.2378 70.1762 27.9495 70.4341 27.5551L68.7602 26.4606C68.7304 26.5062 68.6821 26.5564 68.5762 26.6043L69.3994 28.427ZM70.4316 27.5589C70.7032 27.1477 70.8193 26.6828 70.8193 26.208H68.8193C68.8193 26.3511 68.7874 26.4194 68.7627 26.4568L70.4316 27.5589ZM70.8193 26.208C70.8193 25.748 70.731 25.2729 70.4725 24.8559L68.7727 25.9098C68.7764 25.9159 68.8193 25.9909 68.8193 26.208H70.8193ZM70.4845 24.8758C70.2243 24.4335 69.8289 24.1394 69.3752 23.9737L68.6893 25.8524C68.7344 25.8689 68.753 25.8827 68.7571 25.886C68.7599 25.8883 68.7596 25.8881 68.7606 25.8898L70.4845 24.8758ZM69.3932 23.9805C68.9767 23.8193 68.5088 23.7607 68.0293 23.7607V25.7607C68.3623 25.7607 68.563 25.8038 68.6712 25.8457L69.3932 23.9805ZM68.0293 23.7607H66.2266V25.7607H68.0293V23.7607ZM65.2266 24.7607V33H67.2266V24.7607H65.2266ZM66.2266 32H65.0015V34H66.2266V32ZM66.0015 33V23.7578H64.0015V33H66.0015ZM65.0015 24.7578H68.0293V22.7578H65.0015V24.7578ZM68.0293 24.7578C68.4368 24.7578 68.7726 24.7999 69.046 24.8713L69.5517 22.9363C69.0803 22.8131 68.5697 22.7578 68.0293 22.7578V24.7578ZM69.0563 24.874C69.3147 24.9385 69.4961 25.0316 69.6262 25.134L70.863 23.5623C70.4769 23.2584 70.0278 23.0553 69.5414 22.9337L69.0563 24.874ZM69.6405 25.145C69.7635 25.2383 69.8568 25.3547 69.9254 25.5113L71.7572 24.7084C71.555 24.2472 71.2505 23.8558 70.8487 23.5512L69.6405 25.145ZM69.9254 25.5113C69.9922 25.6636 70.0444 25.8901 70.0444 26.2207H72.0444C72.0444 25.688 71.9613 25.174 71.7572 24.7084L69.9254 25.5113ZM70.0444 26.2207C70.0444 26.4214 69.996 26.58 69.9064 26.7223L71.5985 27.7885C71.8982 27.3129 72.0444 26.7817 72.0444 26.2207H70.0444ZM69.9097 26.717C69.8123 26.8695 69.6689 27.0098 69.4507 27.1323L70.4292 28.8765C70.905 28.6096 71.3033 28.2506 71.5951 27.7938L69.9097 26.717ZM69.4461 27.1348C69.2377 27.2532 68.9678 27.3439 68.6155 27.3859L68.8523 29.3719C69.4225 29.3039 69.9566 29.1449 70.4338 28.874L69.4461 27.1348ZM68.1709 27.5524L67.7329 27.8508L68.8589 29.5037L69.2969 29.2054L68.1709 27.5524ZM68.2388 32H65.4712V34H68.2388V32ZM66.2926 33.5703L66.9845 32.5737L65.3416 31.4331L64.6498 32.4297L66.2926 33.5703ZM66.1631 33.0034H68.2388V31.0034H66.1631V33.0034ZM68.2388 33.0034C68.7404 33.0034 69.2326 32.9165 69.6762 32.6947L68.7818 30.9059C68.6837 30.9549 68.5158 31.0034 68.2388 31.0034V33.0034ZM69.6707 32.6975C70.1071 32.4826 70.4695 32.1623 70.7201 31.7347L68.9947 30.7233C68.9576 30.7866 68.901 30.8471 68.7873 30.9031L69.6707 32.6975ZM70.7239 31.7283C70.9695 31.3021 71.0732 30.8296 71.0732 30.3467H69.0732C69.0732 30.5408 69.0331 30.6566 68.991 30.7297L70.7239 31.7283ZM71.0732 30.3467C71.0732 29.8858 70.9906 29.432 70.7866 29.0169L68.9917 29.8991C69.0331 29.9834 69.0732 30.1221 69.0732 30.3467H71.0732ZM70.7866 29.0169C70.5634 28.5627 70.2106 28.219 69.7702 27.9918L68.8529 29.769C68.9372 29.8125 68.9695 29.854 68.9917 29.8991L70.7866 29.0169ZM69.7702 27.9918C69.3204 27.7596 68.8095 27.6772 68.2959 27.6772V29.6772C68.6118 29.6772 68.7779 29.7303 68.8529 29.769L69.7702 27.9918ZM68.2959 27.6772H66.5503V29.6772H68.2959V27.6772ZM67.5502 28.6901L67.5629 27.7063L65.5631 27.6805L65.5504 28.6643L67.5502 28.6901ZM66.563 28.6934H68.9497V26.6934H66.563V28.6934ZM68.1428 28.2841L68.4031 28.6396L70.0168 27.4581L69.7566 27.1026L68.1428 28.2841ZM69.1246 29.0452C69.4261 29.071 69.6267 29.1514 69.7671 29.2494L70.9126 27.6099C70.4351 27.2764 69.8825 27.1028 69.2954 27.0525L69.1246 29.0452ZM69.7748 29.2547C69.9437 29.3704 70.0621 29.509 70.1454 29.6802L71.9434 28.8042C71.7052 28.3152 71.3538 27.9121 70.9049 27.6047L69.7748 29.2547ZM70.15 29.6894C70.2403 29.87 70.292 30.0791 70.292 30.334H72.292C72.292 29.7933 72.1786 29.2745 71.9389 28.795L70.15 29.6894ZM70.292 30.334C70.292 30.7609 70.199 31.051 70.0682 31.2559L71.7541 32.332C72.131 31.7414 72.292 31.0581 72.292 30.334H70.292ZM70.0667 31.2582C69.9293 31.4748 69.732 31.6512 69.4379 31.7847L70.2642 33.606C70.8842 33.3247 71.3936 32.9002 71.7555 32.3296L70.0667 31.2582ZM69.4449 31.7815C69.1421 31.9161 68.7487 32 68.2388 32V34C68.9645 34 69.646 33.8808 70.2572 33.6091L69.4449 31.7815Z"
							fill="#550152"
							fillOpacity="0.5"
						/>
						<mask id="path-5-inside-1_6_2" fill="white">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 24.4499C0 16.4619 6.0037 9.88069 13.7312 9L12.7669 13.2447H18.689L17.7385 9.06083C25.2382 10.1492 31 16.6245 31 24.4499C31 33.038 24.0604 40 15.5 40C6.93959 40 0 33.038 0 24.4499ZM14.1324 19.419C14.1324 21.6923 12.2954 23.5352 10.0294 23.5352C7.76342 23.5352 5.92647 21.6923 5.92647 19.419C5.92647 17.1457 7.76342 15.3028 10.0294 15.3028C12.2954 15.3028 14.1324 17.1457 14.1324 19.419ZM20.9706 23.5352C23.2366 23.5352 25.0735 21.6923 25.0735 19.419C25.0735 17.1457 23.2366 15.3028 20.9706 15.3028C18.7046 15.3028 16.8676 17.1457 16.8676 19.419C16.8676 21.6923 18.7046 23.5352 20.9706 23.5352ZM20.9927 30.8738C21.2791 30.319 21.4265 29.7242 21.4265 29.1236H20.3579C20.3579 29.6116 20.2381 30.0948 20.0054 30.5456C19.7728 30.9965 19.4317 31.4061 19.0018 31.7512C18.5719 32.0962 18.0615 32.3699 17.4997 32.5567C16.938 32.7434 16.336 32.8395 15.7279 32.8395C15.1199 32.8395 14.5179 32.7434 13.9561 32.5567C13.3944 32.3699 12.884 32.0962 12.4541 31.7512C12.0242 31.4061 11.6831 30.9965 11.4504 30.5456C11.2178 30.0948 11.098 29.6116 11.098 29.1236H10.0294C10.0294 29.7242 10.1768 30.319 10.4632 30.8738C10.7496 31.4287 11.1693 31.9329 11.6985 32.3576C12.2276 32.7823 12.8558 33.1192 13.5472 33.349C14.2386 33.5789 14.9796 33.6972 15.7279 33.6972C16.4763 33.6972 17.2173 33.5789 17.9087 33.349C18.6 33.1192 19.2283 32.7823 19.7574 32.3576C20.2866 31.9329 20.7063 31.4287 20.9927 30.8738Z"
							/>
						</mask>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M0 24.4499C0 16.4619 6.0037 9.88069 13.7312 9L12.7669 13.2447H18.689L17.7385 9.06083C25.2382 10.1492 31 16.6245 31 24.4499C31 33.038 24.0604 40 15.5 40C6.93959 40 0 33.038 0 24.4499ZM14.1324 19.419C14.1324 21.6923 12.2954 23.5352 10.0294 23.5352C7.76342 23.5352 5.92647 21.6923 5.92647 19.419C5.92647 17.1457 7.76342 15.3028 10.0294 15.3028C12.2954 15.3028 14.1324 17.1457 14.1324 19.419ZM20.9706 23.5352C23.2366 23.5352 25.0735 21.6923 25.0735 19.419C25.0735 17.1457 23.2366 15.3028 20.9706 15.3028C18.7046 15.3028 16.8676 17.1457 16.8676 19.419C16.8676 21.6923 18.7046 23.5352 20.9706 23.5352ZM20.9927 30.8738C21.2791 30.319 21.4265 29.7242 21.4265 29.1236H20.3579C20.3579 29.6116 20.2381 30.0948 20.0054 30.5456C19.7728 30.9965 19.4317 31.4061 19.0018 31.7512C18.5719 32.0962 18.0615 32.3699 17.4997 32.5567C16.938 32.7434 16.336 32.8395 15.7279 32.8395C15.1199 32.8395 14.5179 32.7434 13.9561 32.5567C13.3944 32.3699 12.884 32.0962 12.4541 31.7512C12.0242 31.4061 11.6831 30.9965 11.4504 30.5456C11.2178 30.0948 11.098 29.6116 11.098 29.1236H10.0294C10.0294 29.7242 10.1768 30.319 10.4632 30.8738C10.7496 31.4287 11.1693 31.9329 11.6985 32.3576C12.2276 32.7823 12.8558 33.1192 13.5472 33.349C14.2386 33.5789 14.9796 33.6972 15.7279 33.6972C16.4763 33.6972 17.2173 33.5789 17.9087 33.349C18.6 33.1192 19.2283 32.7823 19.7574 32.3576C20.2866 31.9329 20.7063 31.4287 20.9927 30.8738Z"
							fill="#F27B0E"
						/>
						<path
							d="M13.7312 9L14.7063 9.22152L15.0186 7.8468L13.6179 8.00643L13.7312 9ZM12.7669 13.2447L11.7917 13.0232L11.5143 14.2447H12.7669V13.2447ZM18.689 13.2447V14.2447H19.9416L19.6641 13.0232L18.689 13.2447ZM17.7385 9.06083L17.8822 8.0712L16.4407 7.86201L16.7634 9.28235L17.7385 9.06083ZM21.4265 29.1236H22.4265V28.1236H21.4265V29.1236ZM20.9927 30.8738L20.1041 30.4152L20.1041 30.4152L20.9927 30.8738ZM20.3579 29.1236V28.1236H19.3579V29.1236H20.3579ZM20.0054 30.5456L19.1168 30.087L19.1168 30.087L20.0054 30.5456ZM19.0018 31.7512L19.6277 32.531L19.6277 32.531L19.0018 31.7512ZM17.4997 32.5567L17.1843 31.6077L17.1843 31.6077L17.4997 32.5567ZM13.9561 32.5567L14.2716 31.6077L14.2716 31.6077L13.9561 32.5567ZM12.4541 31.7512L11.8282 32.531L11.8282 32.531L12.4541 31.7512ZM11.098 29.1236L12.098 29.1236L12.098 28.1236H11.098V29.1236ZM10.0294 29.1236V28.1236H9.02941V29.1236H10.0294ZM11.6985 32.3576L12.3244 31.5777L12.3244 31.5777L11.6985 32.3576ZM13.5472 33.349L13.8627 32.4001L13.8627 32.4001L13.5472 33.349ZM15.7279 33.6972L15.7279 32.6972H15.7279V33.6972ZM17.9087 33.349L17.5932 32.4001L17.5932 32.4001L17.9087 33.349ZM19.7574 32.3576L19.1315 31.5777L19.1315 31.5777L19.7574 32.3576ZM13.6179 8.00643C5.38849 8.94433 -1 15.9502 -1 24.4499H1C1 16.9736 6.61892 10.817 13.8444 9.99357L13.6179 8.00643ZM13.7421 13.4662L14.7063 9.22152L12.756 8.77848L11.7917 13.0232L13.7421 13.4662ZM18.689 12.2447H12.7669V14.2447H18.689V12.2447ZM16.7634 9.28235L17.7138 13.4662L19.6641 13.0232L18.7137 8.83931L16.7634 9.28235ZM32 24.4499C32 16.123 25.8688 9.23023 17.8822 8.0712L17.5949 10.0505C24.6076 11.0682 30 17.126 30 24.4499H32ZM15.5 41C24.6157 41 32 33.5872 32 24.4499H30C30 32.4888 23.5051 39 15.5 39V41ZM-1 24.4499C-1 33.5872 6.38426 41 15.5 41V39C7.49491 39 1 32.4888 1 24.4499H-1ZM10.0294 24.5352C12.8507 24.5352 15.1324 22.2416 15.1324 19.419H13.1324C13.1324 21.1431 11.7401 22.5352 10.0294 22.5352V24.5352ZM4.92647 19.419C4.92647 22.2416 7.2081 24.5352 10.0294 24.5352V22.5352C8.31874 22.5352 6.92647 21.1431 6.92647 19.419H4.92647ZM10.0294 14.3028C7.2081 14.3028 4.92647 16.5965 4.92647 19.419H6.92647C6.92647 17.6949 8.31874 16.3028 10.0294 16.3028V14.3028ZM15.1324 19.419C15.1324 16.5965 12.8507 14.3028 10.0294 14.3028V16.3028C11.7401 16.3028 13.1324 17.6949 13.1324 19.419H15.1324ZM24.0735 19.419C24.0735 21.1431 22.6813 22.5352 20.9706 22.5352V24.5352C23.7919 24.5352 26.0735 22.2416 26.0735 19.419H24.0735ZM20.9706 16.3028C22.6813 16.3028 24.0735 17.6949 24.0735 19.419H26.0735C26.0735 16.5965 23.7919 14.3028 20.9706 14.3028V16.3028ZM17.8676 19.419C17.8676 17.6949 19.2599 16.3028 20.9706 16.3028V14.3028C18.1493 14.3028 15.8676 16.5965 15.8676 19.419H17.8676ZM20.9706 22.5352C19.2599 22.5352 17.8676 21.1431 17.8676 19.419H15.8676C15.8676 22.2416 18.1493 24.5352 20.9706 24.5352V22.5352ZM20.4265 29.1236C20.4265 29.5582 20.3203 29.9963 20.1041 30.4152L21.8813 31.3325C22.2379 30.6416 22.4265 29.8902 22.4265 29.1236H20.4265ZM20.3579 30.1236H21.4265V28.1236H20.3579V30.1236ZM20.8941 31.0043C21.1969 30.4174 21.3579 29.7776 21.3579 29.1236H19.3579C19.3579 29.4456 19.2793 29.7722 19.1168 30.087L20.8941 31.0043ZM19.6277 32.531C20.1572 32.1061 20.5919 31.5898 20.8941 31.0043L19.1168 30.087C18.9537 30.4031 18.7063 30.7061 18.3759 30.9713L19.6277 32.531ZM17.8152 33.5056C18.4813 33.2842 19.0985 32.9558 19.6277 32.531L18.3759 30.9713C18.0452 31.2367 17.6417 31.4557 17.1843 31.6077L17.8152 33.5056ZM15.7279 33.8395C16.4402 33.8395 17.149 33.7271 17.8152 33.5056L17.1843 31.6077C16.727 31.7597 16.2317 31.8395 15.7279 31.8395V33.8395ZM13.6407 33.5056C14.3069 33.7271 15.0157 33.8395 15.7279 33.8395V31.8395C15.2242 31.8395 14.7288 31.7597 14.2716 31.6077L13.6407 33.5056ZM11.8282 32.531C12.3574 32.9558 12.9746 33.2842 13.6407 33.5056L14.2716 31.6077C13.8142 31.4557 13.4107 31.2367 13.08 30.9713L11.8282 32.531ZM10.5618 31.0043C10.864 31.5898 11.2987 32.1061 11.8282 32.531L13.08 30.9713C12.7496 30.7061 12.5022 30.4031 12.3391 30.087L10.5618 31.0043ZM10.098 29.1236C10.098 29.7776 10.259 30.4174 10.5618 31.0043L12.3391 30.087C12.1766 29.7722 12.098 29.4456 12.098 29.1236L10.098 29.1236ZM10.0294 30.1236H11.098V28.1236H10.0294V30.1236ZM11.3518 30.4152C11.1356 29.9963 11.0294 29.5582 11.0294 29.1236H9.02941C9.02941 29.8902 9.218 30.6416 9.57455 31.3325L11.3518 30.4152ZM12.3244 31.5777C11.8948 31.2329 11.5687 30.8354 11.3518 30.4152L9.57455 31.3325C9.93046 32.0221 10.4439 32.6329 11.0725 33.1375L12.3244 31.5777ZM13.8627 32.4001C13.2756 32.2049 12.7543 31.9228 12.3244 31.5777L11.0725 33.1375C11.701 33.6419 12.436 34.0334 13.2317 34.298L13.8627 32.4001ZM15.7279 32.6972C15.0839 32.6972 14.4496 32.5952 13.8627 32.4001L13.2317 34.298C14.0276 34.5626 14.8753 34.6972 15.7279 34.6972V32.6972ZM17.5932 32.4001C17.0063 32.5952 16.372 32.6972 15.7279 32.6972L15.7279 34.6972C16.5806 34.6972 17.4283 34.5625 18.2241 34.298L17.5932 32.4001ZM19.1315 31.5777C18.7016 31.9228 18.1802 32.2049 17.5932 32.4001L18.2241 34.298C19.0199 34.0334 19.7549 33.6419 20.3833 33.1375L19.1315 31.5777ZM20.1041 30.4152C19.8872 30.8354 19.5611 31.2329 19.1315 31.5777L20.3833 33.1375C21.012 32.6329 21.5254 32.0221 21.8813 31.3325L20.1041 30.4152Z"
							fill="#550152"
							fillOpacity="0.5"
							mask="url(#path-5-inside-1_6_2)"
						/>
					</svg>
				</div>
				<NavBar />
				<div className={styles['button-container']}>
					<Button
						textBtn={'Login'}
						onClick={(): void => {
							navigate('/login');
						}}
					/>
					<Button textBtn={'SingUp'} style={{ backgroundColor: '#582EFF' }} />
				</div>
			</div>
		</header>
	);
};
