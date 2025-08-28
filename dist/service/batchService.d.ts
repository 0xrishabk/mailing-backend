declare const getBatches: () => Promise<{
    id: number;
    year: string;
}[]>;
declare const createBatch: (year: string) => Promise<{
    id: number;
    year: string;
}>;
export { getBatches, createBatch };
//# sourceMappingURL=batchService.d.ts.map