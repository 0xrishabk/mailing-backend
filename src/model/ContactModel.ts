export interface CreateContactStudent {
  name: string;
  email: string;
  phone: string;
  facultyId: number;
  batchId: number;
}

export interface CreateContactTeacher {
  name: string;
  email: string;
  phone: string;
  facultyIds: number[];
  batchIds: number[];
  status?: string;
}

export interface CreateContactManagement {
  name: string;
  email: string;
  phone: string;
  facultyIds: number[];
  batchIds: number[];
  status?: string;
}