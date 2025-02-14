import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

interface IsAdminProps {
	/**
	 * Fallback component.
	 */
	fallback: React.ReactNode | null;

	/**
	 * Child component.
	 */
	children: React.ReactNode;
}

/*
 * IsAdmin
 *
 * A wrapper component that checks whether the current user has admin capabilities
 * and only returns the child components if the user is an admin. You can pass a
 * fallback component via the fallback prop.
 */
export const IsAdmin: React.FC<IsAdminProps> = ({ fallback = null, children }) => {
	const hasAdminPermissions = useSelect(
		(select) => select(coreStore).canUser('read', 'users?roles=1'),
		[],
	);
	return hasAdminPermissions ? children : fallback;
};
