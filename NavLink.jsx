import type { FunctionComponent } from 'react';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LinkNav: FunctionComponent<{
	href: string;
	className?: string;
	classActive?: string;
}> = ({ href, children, className, classActive }) => {
	const router = useRouter();
	const [active, setActive] = React.useState(false);
	React.useEffect(() => {
		const sanitizedPath = router.asPath.split('#')[0].split('?')[0];
		if (sanitizedPath === href) {
			return setActive(true);
		} else {
			return setActive(false);
		}
	}, [href, router.asPath]);
	const classAct = classActive || '';
	const classNm = className || '';
	return (
		<Link href={href}>
			<a className={active ? `${classAct} ${classNm}` : `${classNm}`}>
				{children}
			</a>
		</Link>
	);
};

export default LinkNav;
