import { AdminList, Admin as AdminInterface } from "../data/admin.js";

interface AdminManage extends AdminInterface {
  login(name: string, pwd: string): AdminInterface | undefined;
  addAdmin(name: string, pwd: string): AdminInterface;
  deleteAdmin(id: number): boolean;
  updateAdmin(id: number, name: string, pwd: string): boolean;
  getAdmin(id: number): AdminInterface | undefined;
  getAdminList(): AdminInterface[];
}

class Admin implements AdminManage {
  id: number;
  name: string;
  pwd: string;

  constructor(name: string, pwd: string) {
    this.name = name;
    this.pwd = pwd;
    this.id = this.login(name, pwd)?.id || 0;
  }

  login(name: string, pwd: string): AdminInterface | undefined {
    const admin = Admin.AdminList.find(
      (admin) => admin.name === name && admin.pwd === pwd
    );
    return admin;
  }

  addAdmin(name: string, pwd: string): AdminInterface {
    const id = Admin.AdminList.length + 1;
    const admin = new Admin(name, pwd);
    Admin.AdminList.push({ ...admin, id });
    return admin;
  }

  deleteAdmin(id: number): boolean {
    const index = Admin.AdminList.findIndex((admin) => admin.id === id);
    if (index < 0) return false;
    Admin.AdminList.splice(index, 1);
    return true;
  }

  updateAdmin(id: number, name: string, pwd: string): boolean {
    const admin = this.getAdmin(id);
    if (!admin) return false;
    admin.name = name;
    admin.pwd = pwd;
    return true;
  }

  getAdmin(id: number): AdminInterface | undefined {
    const admin = Admin.AdminList.find((admin) => admin.id === id);
    return admin;
  }

  getAdminList(): AdminInterface[] {
    return Admin.AdminList;
  }

  static AdminList: AdminInterface[] = AdminList;
}

export default Admin;
