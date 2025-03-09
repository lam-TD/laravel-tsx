
### Users api

#### users table
  - id: integer, primary key, auto increment
  - name: string, required
  - email: string, required, unique
  - password: string, required
  - avatar: string, optional
  - role: string, required, enum: ['admin', 'user']
  - status: string, required, enum: ['active', 'inactive']
  - 2FA: boolean, optional


- list: pagination, filter, sort, include, fields
- show: include, fields
- create: 
  - email: check email exists
  - check role: super admin or role is user

- update:
  - check update self
  - check role: super admin or role is user
- update avatar: image (jpg, png), max 2MB
  - only owner can update
- delete
  - soft delete
  - can't not delete self
  - can't not delete super admin
  - can't not delete user has same role.
  - super admin can delete all users