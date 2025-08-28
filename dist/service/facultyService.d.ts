declare const getFaculties: () => Promise<{
    id: number;
    name: string;
}[]>;
declare const createFaculty: (name: string) => Promise<{
    id: number;
    name: string;
}>;
export { createFaculty, getFaculties };
//# sourceMappingURL=facultyService.d.ts.map