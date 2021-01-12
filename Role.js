import { intersection } from 'lodash';


export const RoleBased = (role,path,back) =>{
  let staff = ['/human-resource','/settings','/company-master']
  if(role === 'STAFF')
  if(staff.indexOf(path) >= 0){
    back.goBack()
  }
}

export default {
	SUPER_USER: 'SUPER_USER',
	ADMIN: 'ADMIN',
	STAFF: 'STAFF'
};

export function isArrayWithLength(arr) {
	return (Array.isArray(arr) && arr.length)
}

export const getAllowedRoutes = (routes) => {
	const roles = [localStorage.getItem('role')]
	return routes.filter(({ permission }) => {
		if(!permission) return true;
		else if(!isArrayWithLength(permission)) return true;
		else return intersection(permission, roles).length;
  });
}
