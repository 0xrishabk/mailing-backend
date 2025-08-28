
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Batch
 * 
 */
export type Batch = $Result.DefaultSelection<Prisma.$BatchPayload>
/**
 * Model Faculty
 * 
 */
export type Faculty = $Result.DefaultSelection<Prisma.$FacultyPayload>
/**
 * Model ContactStudents
 * 
 */
export type ContactStudents = $Result.DefaultSelection<Prisma.$ContactStudentsPayload>
/**
 * Model ContactTeachers
 * 
 */
export type ContactTeachers = $Result.DefaultSelection<Prisma.$ContactTeachersPayload>
/**
 * Model ContactManagement
 * 
 */
export type ContactManagement = $Result.DefaultSelection<Prisma.$ContactManagementPayload>
/**
 * Model Mailing
 * 
 */
export type Mailing = $Result.DefaultSelection<Prisma.$MailingPayload>
/**
 * Model Recipient
 * 
 */
export type Recipient = $Result.DefaultSelection<Prisma.$RecipientPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EmployeeStatus: {
  INACTIVE: 'INACTIVE',
  ACTIVE: 'ACTIVE',
  LEFT: 'LEFT',
  ON_BREAK: 'ON_BREAK'
};

export type EmployeeStatus = (typeof EmployeeStatus)[keyof typeof EmployeeStatus]


export const Role: {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
  MANAGEMENT: 'MANAGEMENT',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const MailingStatus: {
  SENT: 'SENT',
  ERROR: 'ERROR'
};

export type MailingStatus = (typeof MailingStatus)[keyof typeof MailingStatus]

}

export type EmployeeStatus = $Enums.EmployeeStatus

export const EmployeeStatus: typeof $Enums.EmployeeStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type MailingStatus = $Enums.MailingStatus

export const MailingStatus: typeof $Enums.MailingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batch`: Exposes CRUD operations for the **Batch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Batches
    * const batches = await prisma.batch.findMany()
    * ```
    */
  get batch(): Prisma.BatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.faculty`: Exposes CRUD operations for the **Faculty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faculties
    * const faculties = await prisma.faculty.findMany()
    * ```
    */
  get faculty(): Prisma.FacultyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactStudents`: Exposes CRUD operations for the **ContactStudents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactStudents
    * const contactStudents = await prisma.contactStudents.findMany()
    * ```
    */
  get contactStudents(): Prisma.ContactStudentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactTeachers`: Exposes CRUD operations for the **ContactTeachers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactTeachers
    * const contactTeachers = await prisma.contactTeachers.findMany()
    * ```
    */
  get contactTeachers(): Prisma.ContactTeachersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactManagement`: Exposes CRUD operations for the **ContactManagement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactManagements
    * const contactManagements = await prisma.contactManagement.findMany()
    * ```
    */
  get contactManagement(): Prisma.ContactManagementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mailing`: Exposes CRUD operations for the **Mailing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mailings
    * const mailings = await prisma.mailing.findMany()
    * ```
    */
  get mailing(): Prisma.MailingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipient`: Exposes CRUD operations for the **Recipient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipients
    * const recipients = await prisma.recipient.findMany()
    * ```
    */
  get recipient(): Prisma.RecipientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Batch: 'Batch',
    Faculty: 'Faculty',
    ContactStudents: 'ContactStudents',
    ContactTeachers: 'ContactTeachers',
    ContactManagement: 'ContactManagement',
    Mailing: 'Mailing',
    Recipient: 'Recipient',
    Token: 'Token'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "batch" | "faculty" | "contactStudents" | "contactTeachers" | "contactManagement" | "mailing" | "recipient" | "token"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Batch: {
        payload: Prisma.$BatchPayload<ExtArgs>
        fields: Prisma.BatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findFirst: {
            args: Prisma.BatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findMany: {
            args: Prisma.BatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          create: {
            args: Prisma.BatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          createMany: {
            args: Prisma.BatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          delete: {
            args: Prisma.BatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          update: {
            args: Prisma.BatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          deleteMany: {
            args: Prisma.BatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          upsert: {
            args: Prisma.BatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          aggregate: {
            args: Prisma.BatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatch>
          }
          groupBy: {
            args: Prisma.BatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchCountArgs<ExtArgs>
            result: $Utils.Optional<BatchCountAggregateOutputType> | number
          }
        }
      }
      Faculty: {
        payload: Prisma.$FacultyPayload<ExtArgs>
        fields: Prisma.FacultyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          findFirst: {
            args: Prisma.FacultyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          findMany: {
            args: Prisma.FacultyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>[]
          }
          create: {
            args: Prisma.FacultyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          createMany: {
            args: Prisma.FacultyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacultyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>[]
          }
          delete: {
            args: Prisma.FacultyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          update: {
            args: Prisma.FacultyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          deleteMany: {
            args: Prisma.FacultyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacultyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>[]
          }
          upsert: {
            args: Prisma.FacultyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          aggregate: {
            args: Prisma.FacultyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaculty>
          }
          groupBy: {
            args: Prisma.FacultyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultyCountArgs<ExtArgs>
            result: $Utils.Optional<FacultyCountAggregateOutputType> | number
          }
        }
      }
      ContactStudents: {
        payload: Prisma.$ContactStudentsPayload<ExtArgs>
        fields: Prisma.ContactStudentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactStudentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactStudentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactStudentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactStudentsPayload>
          }
          findFirst: {
            args: Prisma.ContactStudentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactStudentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactStudentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactStudentsPayload>
          }
          findMany: {
            args: Prisma.ContactStudentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactStudentsPayload>[]
          }
          create: {
            args: Prisma.ContactStudentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactStudentsPayload>
          }
          createMany: {
            args: Prisma.ContactStudentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactStudentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactStudentsPayload>[]
          }
          delete: {
            args: Prisma.ContactStudentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactStudentsPayload>
          }
          update: {
            args: Prisma.ContactStudentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactStudentsPayload>
          }
          deleteMany: {
            args: Prisma.ContactStudentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactStudentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactStudentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactStudentsPayload>[]
          }
          upsert: {
            args: Prisma.ContactStudentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactStudentsPayload>
          }
          aggregate: {
            args: Prisma.ContactStudentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactStudents>
          }
          groupBy: {
            args: Prisma.ContactStudentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactStudentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactStudentsCountArgs<ExtArgs>
            result: $Utils.Optional<ContactStudentsCountAggregateOutputType> | number
          }
        }
      }
      ContactTeachers: {
        payload: Prisma.$ContactTeachersPayload<ExtArgs>
        fields: Prisma.ContactTeachersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactTeachersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTeachersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactTeachersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTeachersPayload>
          }
          findFirst: {
            args: Prisma.ContactTeachersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTeachersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactTeachersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTeachersPayload>
          }
          findMany: {
            args: Prisma.ContactTeachersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTeachersPayload>[]
          }
          create: {
            args: Prisma.ContactTeachersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTeachersPayload>
          }
          createMany: {
            args: Prisma.ContactTeachersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactTeachersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTeachersPayload>[]
          }
          delete: {
            args: Prisma.ContactTeachersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTeachersPayload>
          }
          update: {
            args: Prisma.ContactTeachersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTeachersPayload>
          }
          deleteMany: {
            args: Prisma.ContactTeachersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactTeachersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactTeachersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTeachersPayload>[]
          }
          upsert: {
            args: Prisma.ContactTeachersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTeachersPayload>
          }
          aggregate: {
            args: Prisma.ContactTeachersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactTeachers>
          }
          groupBy: {
            args: Prisma.ContactTeachersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactTeachersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactTeachersCountArgs<ExtArgs>
            result: $Utils.Optional<ContactTeachersCountAggregateOutputType> | number
          }
        }
      }
      ContactManagement: {
        payload: Prisma.$ContactManagementPayload<ExtArgs>
        fields: Prisma.ContactManagementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactManagementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactManagementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactManagementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactManagementPayload>
          }
          findFirst: {
            args: Prisma.ContactManagementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactManagementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactManagementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactManagementPayload>
          }
          findMany: {
            args: Prisma.ContactManagementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactManagementPayload>[]
          }
          create: {
            args: Prisma.ContactManagementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactManagementPayload>
          }
          createMany: {
            args: Prisma.ContactManagementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactManagementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactManagementPayload>[]
          }
          delete: {
            args: Prisma.ContactManagementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactManagementPayload>
          }
          update: {
            args: Prisma.ContactManagementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactManagementPayload>
          }
          deleteMany: {
            args: Prisma.ContactManagementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactManagementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactManagementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactManagementPayload>[]
          }
          upsert: {
            args: Prisma.ContactManagementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactManagementPayload>
          }
          aggregate: {
            args: Prisma.ContactManagementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactManagement>
          }
          groupBy: {
            args: Prisma.ContactManagementGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactManagementGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactManagementCountArgs<ExtArgs>
            result: $Utils.Optional<ContactManagementCountAggregateOutputType> | number
          }
        }
      }
      Mailing: {
        payload: Prisma.$MailingPayload<ExtArgs>
        fields: Prisma.MailingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MailingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MailingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailingPayload>
          }
          findFirst: {
            args: Prisma.MailingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MailingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailingPayload>
          }
          findMany: {
            args: Prisma.MailingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailingPayload>[]
          }
          create: {
            args: Prisma.MailingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailingPayload>
          }
          createMany: {
            args: Prisma.MailingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MailingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailingPayload>[]
          }
          delete: {
            args: Prisma.MailingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailingPayload>
          }
          update: {
            args: Prisma.MailingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailingPayload>
          }
          deleteMany: {
            args: Prisma.MailingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MailingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MailingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailingPayload>[]
          }
          upsert: {
            args: Prisma.MailingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailingPayload>
          }
          aggregate: {
            args: Prisma.MailingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMailing>
          }
          groupBy: {
            args: Prisma.MailingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MailingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MailingCountArgs<ExtArgs>
            result: $Utils.Optional<MailingCountAggregateOutputType> | number
          }
        }
      }
      Recipient: {
        payload: Prisma.$RecipientPayload<ExtArgs>
        fields: Prisma.RecipientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          findFirst: {
            args: Prisma.RecipientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          findMany: {
            args: Prisma.RecipientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>[]
          }
          create: {
            args: Prisma.RecipientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          createMany: {
            args: Prisma.RecipientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>[]
          }
          delete: {
            args: Prisma.RecipientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          update: {
            args: Prisma.RecipientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          deleteMany: {
            args: Prisma.RecipientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>[]
          }
          upsert: {
            args: Prisma.RecipientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          aggregate: {
            args: Prisma.RecipientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipient>
          }
          groupBy: {
            args: Prisma.RecipientGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipientGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipientCountArgs<ExtArgs>
            result: $Utils.Optional<RecipientCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    batch?: BatchOmit
    faculty?: FacultyOmit
    contactStudents?: ContactStudentsOmit
    contactTeachers?: ContactTeachersOmit
    contactManagement?: ContactManagementOmit
    mailing?: MailingOmit
    recipient?: RecipientOmit
    token?: TokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BatchCountOutputType
   */

  export type BatchCountOutputType = {
    contactStudents: number
    contactTeachers: number
    contactManagement: number
  }

  export type BatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactStudents?: boolean | BatchCountOutputTypeCountContactStudentsArgs
    contactTeachers?: boolean | BatchCountOutputTypeCountContactTeachersArgs
    contactManagement?: boolean | BatchCountOutputTypeCountContactManagementArgs
  }

  // Custom InputTypes
  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchCountOutputType
     */
    select?: BatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeCountContactStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactStudentsWhereInput
  }

  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeCountContactTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactTeachersWhereInput
  }

  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeCountContactManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactManagementWhereInput
  }


  /**
   * Count Type FacultyCountOutputType
   */

  export type FacultyCountOutputType = {
    contactStudents: number
    contactTeachers: number
    contactManagement: number
  }

  export type FacultyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactStudents?: boolean | FacultyCountOutputTypeCountContactStudentsArgs
    contactTeachers?: boolean | FacultyCountOutputTypeCountContactTeachersArgs
    contactManagement?: boolean | FacultyCountOutputTypeCountContactManagementArgs
  }

  // Custom InputTypes
  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCountOutputType
     */
    select?: FacultyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeCountContactStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactStudentsWhereInput
  }

  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeCountContactTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactTeachersWhereInput
  }

  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeCountContactManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactManagementWhereInput
  }


  /**
   * Count Type ContactTeachersCountOutputType
   */

  export type ContactTeachersCountOutputType = {
    faculties: number
    batches: number
  }

  export type ContactTeachersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculties?: boolean | ContactTeachersCountOutputTypeCountFacultiesArgs
    batches?: boolean | ContactTeachersCountOutputTypeCountBatchesArgs
  }

  // Custom InputTypes
  /**
   * ContactTeachersCountOutputType without action
   */
  export type ContactTeachersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTeachersCountOutputType
     */
    select?: ContactTeachersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactTeachersCountOutputType without action
   */
  export type ContactTeachersCountOutputTypeCountFacultiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyWhereInput
  }

  /**
   * ContactTeachersCountOutputType without action
   */
  export type ContactTeachersCountOutputTypeCountBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
  }


  /**
   * Count Type ContactManagementCountOutputType
   */

  export type ContactManagementCountOutputType = {
    faculties: number
    batches: number
  }

  export type ContactManagementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculties?: boolean | ContactManagementCountOutputTypeCountFacultiesArgs
    batches?: boolean | ContactManagementCountOutputTypeCountBatchesArgs
  }

  // Custom InputTypes
  /**
   * ContactManagementCountOutputType without action
   */
  export type ContactManagementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactManagementCountOutputType
     */
    select?: ContactManagementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactManagementCountOutputType without action
   */
  export type ContactManagementCountOutputTypeCountFacultiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyWhereInput
  }

  /**
   * ContactManagementCountOutputType without action
   */
  export type ContactManagementCountOutputTypeCountBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
  }


  /**
   * Count Type MailingCountOutputType
   */

  export type MailingCountOutputType = {
    recipients: number
  }

  export type MailingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipients?: boolean | MailingCountOutputTypeCountRecipientsArgs
  }

  // Custom InputTypes
  /**
   * MailingCountOutputType without action
   */
  export type MailingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailingCountOutputType
     */
    select?: MailingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MailingCountOutputType without action
   */
  export type MailingCountOutputTypeCountRecipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipientWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    permission: number | null
  }

  export type UserSumAggregateOutputType = {
    permission: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    permission: number | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    permission: number | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    permission: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    permission?: true
  }

  export type UserSumAggregateInputType = {
    permission?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    permission?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    permission?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    permission?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    permission: number
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    permission?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    permission?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    permission?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    permission?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "permission" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      permission: number
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly permission: FieldRef<"User", 'Int'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Batch
   */

  export type AggregateBatch = {
    _count: BatchCountAggregateOutputType | null
    _avg: BatchAvgAggregateOutputType | null
    _sum: BatchSumAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  export type BatchAvgAggregateOutputType = {
    id: number | null
  }

  export type BatchSumAggregateOutputType = {
    id: number | null
  }

  export type BatchMinAggregateOutputType = {
    id: number | null
    year: string | null
  }

  export type BatchMaxAggregateOutputType = {
    id: number | null
    year: string | null
  }

  export type BatchCountAggregateOutputType = {
    id: number
    year: number
    _all: number
  }


  export type BatchAvgAggregateInputType = {
    id?: true
  }

  export type BatchSumAggregateInputType = {
    id?: true
  }

  export type BatchMinAggregateInputType = {
    id?: true
    year?: true
  }

  export type BatchMaxAggregateInputType = {
    id?: true
    year?: true
  }

  export type BatchCountAggregateInputType = {
    id?: true
    year?: true
    _all?: true
  }

  export type BatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batch to aggregate.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Batches
    **/
    _count?: true | BatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchMaxAggregateInputType
  }

  export type GetBatchAggregateType<T extends BatchAggregateArgs> = {
        [P in keyof T & keyof AggregateBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatch[P]>
      : GetScalarType<T[P], AggregateBatch[P]>
  }




  export type BatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithAggregationInput | BatchOrderByWithAggregationInput[]
    by: BatchScalarFieldEnum[] | BatchScalarFieldEnum
    having?: BatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchCountAggregateInputType | true
    _avg?: BatchAvgAggregateInputType
    _sum?: BatchSumAggregateInputType
    _min?: BatchMinAggregateInputType
    _max?: BatchMaxAggregateInputType
  }

  export type BatchGroupByOutputType = {
    id: number
    year: string
    _count: BatchCountAggregateOutputType | null
    _avg: BatchAvgAggregateOutputType | null
    _sum: BatchSumAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  type GetBatchGroupByPayload<T extends BatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchGroupByOutputType[P]>
            : GetScalarType<T[P], BatchGroupByOutputType[P]>
        }
      >
    >


  export type BatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    contactStudents?: boolean | Batch$contactStudentsArgs<ExtArgs>
    contactTeachers?: boolean | Batch$contactTeachersArgs<ExtArgs>
    contactManagement?: boolean | Batch$contactManagementArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectScalar = {
    id?: boolean
    year?: boolean
  }

  export type BatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year", ExtArgs["result"]["batch"]>
  export type BatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactStudents?: boolean | Batch$contactStudentsArgs<ExtArgs>
    contactTeachers?: boolean | Batch$contactTeachersArgs<ExtArgs>
    contactManagement?: boolean | Batch$contactManagementArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Batch"
    objects: {
      contactStudents: Prisma.$ContactStudentsPayload<ExtArgs>[]
      contactTeachers: Prisma.$ContactTeachersPayload<ExtArgs>[]
      contactManagement: Prisma.$ContactManagementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: string
    }, ExtArgs["result"]["batch"]>
    composites: {}
  }

  type BatchGetPayload<S extends boolean | null | undefined | BatchDefaultArgs> = $Result.GetResult<Prisma.$BatchPayload, S>

  type BatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchCountAggregateInputType | true
    }

  export interface BatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Batch'], meta: { name: 'Batch' } }
    /**
     * Find zero or one Batch that matches the filter.
     * @param {BatchFindUniqueArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchFindUniqueArgs>(args: SelectSubset<T, BatchFindUniqueArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Batch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchFindUniqueOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchFindFirstArgs>(args?: SelectSubset<T, BatchFindFirstArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Batches
     * const batches = await prisma.batch.findMany()
     * 
     * // Get first 10 Batches
     * const batches = await prisma.batch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchWithIdOnly = await prisma.batch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatchFindManyArgs>(args?: SelectSubset<T, BatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Batch.
     * @param {BatchCreateArgs} args - Arguments to create a Batch.
     * @example
     * // Create one Batch
     * const Batch = await prisma.batch.create({
     *   data: {
     *     // ... data to create a Batch
     *   }
     * })
     * 
     */
    create<T extends BatchCreateArgs>(args: SelectSubset<T, BatchCreateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Batches.
     * @param {BatchCreateManyArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchCreateManyArgs>(args?: SelectSubset<T, BatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Batches and returns the data saved in the database.
     * @param {BatchCreateManyAndReturnArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BatchCreateManyAndReturnArgs>(args?: SelectSubset<T, BatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Batch.
     * @param {BatchDeleteArgs} args - Arguments to delete one Batch.
     * @example
     * // Delete one Batch
     * const Batch = await prisma.batch.delete({
     *   where: {
     *     // ... filter to delete one Batch
     *   }
     * })
     * 
     */
    delete<T extends BatchDeleteArgs>(args: SelectSubset<T, BatchDeleteArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Batch.
     * @param {BatchUpdateArgs} args - Arguments to update one Batch.
     * @example
     * // Update one Batch
     * const batch = await prisma.batch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchUpdateArgs>(args: SelectSubset<T, BatchUpdateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Batches.
     * @param {BatchDeleteManyArgs} args - Arguments to filter Batches to delete.
     * @example
     * // Delete a few Batches
     * const { count } = await prisma.batch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchDeleteManyArgs>(args?: SelectSubset<T, BatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchUpdateManyArgs>(args: SelectSubset<T, BatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches and returns the data updated in the database.
     * @param {BatchUpdateManyAndReturnArgs} args - Arguments to update many Batches.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BatchUpdateManyAndReturnArgs>(args: SelectSubset<T, BatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Batch.
     * @param {BatchUpsertArgs} args - Arguments to update or create a Batch.
     * @example
     * // Update or create a Batch
     * const batch = await prisma.batch.upsert({
     *   create: {
     *     // ... data to create a Batch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Batch we want to update
     *   }
     * })
     */
    upsert<T extends BatchUpsertArgs>(args: SelectSubset<T, BatchUpsertArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchCountArgs} args - Arguments to filter Batches to count.
     * @example
     * // Count the number of Batches
     * const count = await prisma.batch.count({
     *   where: {
     *     // ... the filter for the Batches we want to count
     *   }
     * })
    **/
    count<T extends BatchCountArgs>(
      args?: Subset<T, BatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BatchAggregateArgs>(args: Subset<T, BatchAggregateArgs>): Prisma.PrismaPromise<GetBatchAggregateType<T>>

    /**
     * Group by Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchGroupByArgs['orderBy'] }
        : { orderBy?: BatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Batch model
   */
  readonly fields: BatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Batch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contactStudents<T extends Batch$contactStudentsArgs<ExtArgs> = {}>(args?: Subset<T, Batch$contactStudentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactStudentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactTeachers<T extends Batch$contactTeachersArgs<ExtArgs> = {}>(args?: Subset<T, Batch$contactTeachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactTeachersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactManagement<T extends Batch$contactManagementArgs<ExtArgs> = {}>(args?: Subset<T, Batch$contactManagementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactManagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Batch model
   */
  interface BatchFieldRefs {
    readonly id: FieldRef<"Batch", 'Int'>
    readonly year: FieldRef<"Batch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Batch findUnique
   */
  export type BatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findUniqueOrThrow
   */
  export type BatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findFirst
   */
  export type BatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findFirstOrThrow
   */
  export type BatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findMany
   */
  export type BatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batches to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch create
   */
  export type BatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Batch.
     */
    data: XOR<BatchCreateInput, BatchUncheckedCreateInput>
  }

  /**
   * Batch createMany
   */
  export type BatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Batch createManyAndReturn
   */
  export type BatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Batch update
   */
  export type BatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Batch.
     */
    data: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
    /**
     * Choose, which Batch to update.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch updateMany
   */
  export type BatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
  }

  /**
   * Batch updateManyAndReturn
   */
  export type BatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
  }

  /**
   * Batch upsert
   */
  export type BatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Batch to update in case it exists.
     */
    where: BatchWhereUniqueInput
    /**
     * In case the Batch found by the `where` argument doesn't exist, create a new Batch with this data.
     */
    create: XOR<BatchCreateInput, BatchUncheckedCreateInput>
    /**
     * In case the Batch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
  }

  /**
   * Batch delete
   */
  export type BatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter which Batch to delete.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch deleteMany
   */
  export type BatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batches to delete
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to delete.
     */
    limit?: number
  }

  /**
   * Batch.contactStudents
   */
  export type Batch$contactStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactStudents
     */
    select?: ContactStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactStudents
     */
    omit?: ContactStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactStudentsInclude<ExtArgs> | null
    where?: ContactStudentsWhereInput
    orderBy?: ContactStudentsOrderByWithRelationInput | ContactStudentsOrderByWithRelationInput[]
    cursor?: ContactStudentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactStudentsScalarFieldEnum | ContactStudentsScalarFieldEnum[]
  }

  /**
   * Batch.contactTeachers
   */
  export type Batch$contactTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTeachers
     */
    select?: ContactTeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTeachers
     */
    omit?: ContactTeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTeachersInclude<ExtArgs> | null
    where?: ContactTeachersWhereInput
    orderBy?: ContactTeachersOrderByWithRelationInput | ContactTeachersOrderByWithRelationInput[]
    cursor?: ContactTeachersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactTeachersScalarFieldEnum | ContactTeachersScalarFieldEnum[]
  }

  /**
   * Batch.contactManagement
   */
  export type Batch$contactManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactManagement
     */
    select?: ContactManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactManagement
     */
    omit?: ContactManagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactManagementInclude<ExtArgs> | null
    where?: ContactManagementWhereInput
    orderBy?: ContactManagementOrderByWithRelationInput | ContactManagementOrderByWithRelationInput[]
    cursor?: ContactManagementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactManagementScalarFieldEnum | ContactManagementScalarFieldEnum[]
  }

  /**
   * Batch without action
   */
  export type BatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
  }


  /**
   * Model Faculty
   */

  export type AggregateFaculty = {
    _count: FacultyCountAggregateOutputType | null
    _avg: FacultyAvgAggregateOutputType | null
    _sum: FacultySumAggregateOutputType | null
    _min: FacultyMinAggregateOutputType | null
    _max: FacultyMaxAggregateOutputType | null
  }

  export type FacultyAvgAggregateOutputType = {
    id: number | null
  }

  export type FacultySumAggregateOutputType = {
    id: number | null
  }

  export type FacultyMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FacultyMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FacultyCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FacultyAvgAggregateInputType = {
    id?: true
  }

  export type FacultySumAggregateInputType = {
    id?: true
  }

  export type FacultyMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FacultyMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FacultyCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FacultyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faculty to aggregate.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faculties
    **/
    _count?: true | FacultyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacultyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacultySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyMaxAggregateInputType
  }

  export type GetFacultyAggregateType<T extends FacultyAggregateArgs> = {
        [P in keyof T & keyof AggregateFaculty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaculty[P]>
      : GetScalarType<T[P], AggregateFaculty[P]>
  }




  export type FacultyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyWhereInput
    orderBy?: FacultyOrderByWithAggregationInput | FacultyOrderByWithAggregationInput[]
    by: FacultyScalarFieldEnum[] | FacultyScalarFieldEnum
    having?: FacultyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyCountAggregateInputType | true
    _avg?: FacultyAvgAggregateInputType
    _sum?: FacultySumAggregateInputType
    _min?: FacultyMinAggregateInputType
    _max?: FacultyMaxAggregateInputType
  }

  export type FacultyGroupByOutputType = {
    id: number
    name: string
    _count: FacultyCountAggregateOutputType | null
    _avg: FacultyAvgAggregateOutputType | null
    _sum: FacultySumAggregateOutputType | null
    _min: FacultyMinAggregateOutputType | null
    _max: FacultyMaxAggregateOutputType | null
  }

  type GetFacultyGroupByPayload<T extends FacultyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyGroupByOutputType[P]>
        }
      >
    >


  export type FacultySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactStudents?: boolean | Faculty$contactStudentsArgs<ExtArgs>
    contactTeachers?: boolean | Faculty$contactTeachersArgs<ExtArgs>
    contactManagement?: boolean | Faculty$contactManagementArgs<ExtArgs>
    _count?: boolean | FacultyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faculty"]>

  export type FacultySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["faculty"]>

  export type FacultySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["faculty"]>

  export type FacultySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FacultyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["faculty"]>
  export type FacultyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactStudents?: boolean | Faculty$contactStudentsArgs<ExtArgs>
    contactTeachers?: boolean | Faculty$contactTeachersArgs<ExtArgs>
    contactManagement?: boolean | Faculty$contactManagementArgs<ExtArgs>
    _count?: boolean | FacultyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacultyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FacultyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FacultyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Faculty"
    objects: {
      contactStudents: Prisma.$ContactStudentsPayload<ExtArgs>[]
      contactTeachers: Prisma.$ContactTeachersPayload<ExtArgs>[]
      contactManagement: Prisma.$ContactManagementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["faculty"]>
    composites: {}
  }

  type FacultyGetPayload<S extends boolean | null | undefined | FacultyDefaultArgs> = $Result.GetResult<Prisma.$FacultyPayload, S>

  type FacultyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacultyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacultyCountAggregateInputType | true
    }

  export interface FacultyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faculty'], meta: { name: 'Faculty' } }
    /**
     * Find zero or one Faculty that matches the filter.
     * @param {FacultyFindUniqueArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultyFindUniqueArgs>(args: SelectSubset<T, FacultyFindUniqueArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faculty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacultyFindUniqueOrThrowArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultyFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faculty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyFindFirstArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultyFindFirstArgs>(args?: SelectSubset<T, FacultyFindFirstArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faculty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyFindFirstOrThrowArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultyFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultyFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faculties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faculties
     * const faculties = await prisma.faculty.findMany()
     * 
     * // Get first 10 Faculties
     * const faculties = await prisma.faculty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facultyWithIdOnly = await prisma.faculty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacultyFindManyArgs>(args?: SelectSubset<T, FacultyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faculty.
     * @param {FacultyCreateArgs} args - Arguments to create a Faculty.
     * @example
     * // Create one Faculty
     * const Faculty = await prisma.faculty.create({
     *   data: {
     *     // ... data to create a Faculty
     *   }
     * })
     * 
     */
    create<T extends FacultyCreateArgs>(args: SelectSubset<T, FacultyCreateArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faculties.
     * @param {FacultyCreateManyArgs} args - Arguments to create many Faculties.
     * @example
     * // Create many Faculties
     * const faculty = await prisma.faculty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultyCreateManyArgs>(args?: SelectSubset<T, FacultyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faculties and returns the data saved in the database.
     * @param {FacultyCreateManyAndReturnArgs} args - Arguments to create many Faculties.
     * @example
     * // Create many Faculties
     * const faculty = await prisma.faculty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faculties and only return the `id`
     * const facultyWithIdOnly = await prisma.faculty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacultyCreateManyAndReturnArgs>(args?: SelectSubset<T, FacultyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Faculty.
     * @param {FacultyDeleteArgs} args - Arguments to delete one Faculty.
     * @example
     * // Delete one Faculty
     * const Faculty = await prisma.faculty.delete({
     *   where: {
     *     // ... filter to delete one Faculty
     *   }
     * })
     * 
     */
    delete<T extends FacultyDeleteArgs>(args: SelectSubset<T, FacultyDeleteArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faculty.
     * @param {FacultyUpdateArgs} args - Arguments to update one Faculty.
     * @example
     * // Update one Faculty
     * const faculty = await prisma.faculty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultyUpdateArgs>(args: SelectSubset<T, FacultyUpdateArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faculties.
     * @param {FacultyDeleteManyArgs} args - Arguments to filter Faculties to delete.
     * @example
     * // Delete a few Faculties
     * const { count } = await prisma.faculty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultyDeleteManyArgs>(args?: SelectSubset<T, FacultyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faculties
     * const faculty = await prisma.faculty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultyUpdateManyArgs>(args: SelectSubset<T, FacultyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faculties and returns the data updated in the database.
     * @param {FacultyUpdateManyAndReturnArgs} args - Arguments to update many Faculties.
     * @example
     * // Update many Faculties
     * const faculty = await prisma.faculty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Faculties and only return the `id`
     * const facultyWithIdOnly = await prisma.faculty.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacultyUpdateManyAndReturnArgs>(args: SelectSubset<T, FacultyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Faculty.
     * @param {FacultyUpsertArgs} args - Arguments to update or create a Faculty.
     * @example
     * // Update or create a Faculty
     * const faculty = await prisma.faculty.upsert({
     *   create: {
     *     // ... data to create a Faculty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faculty we want to update
     *   }
     * })
     */
    upsert<T extends FacultyUpsertArgs>(args: SelectSubset<T, FacultyUpsertArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyCountArgs} args - Arguments to filter Faculties to count.
     * @example
     * // Count the number of Faculties
     * const count = await prisma.faculty.count({
     *   where: {
     *     // ... the filter for the Faculties we want to count
     *   }
     * })
    **/
    count<T extends FacultyCountArgs>(
      args?: Subset<T, FacultyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacultyAggregateArgs>(args: Subset<T, FacultyAggregateArgs>): Prisma.PrismaPromise<GetFacultyAggregateType<T>>

    /**
     * Group by Faculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacultyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyGroupByArgs['orderBy'] }
        : { orderBy?: FacultyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacultyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Faculty model
   */
  readonly fields: FacultyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Faculty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contactStudents<T extends Faculty$contactStudentsArgs<ExtArgs> = {}>(args?: Subset<T, Faculty$contactStudentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactStudentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactTeachers<T extends Faculty$contactTeachersArgs<ExtArgs> = {}>(args?: Subset<T, Faculty$contactTeachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactTeachersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactManagement<T extends Faculty$contactManagementArgs<ExtArgs> = {}>(args?: Subset<T, Faculty$contactManagementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactManagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Faculty model
   */
  interface FacultyFieldRefs {
    readonly id: FieldRef<"Faculty", 'Int'>
    readonly name: FieldRef<"Faculty", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Faculty findUnique
   */
  export type FacultyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where: FacultyWhereUniqueInput
  }

  /**
   * Faculty findUniqueOrThrow
   */
  export type FacultyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where: FacultyWhereUniqueInput
  }

  /**
   * Faculty findFirst
   */
  export type FacultyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faculties.
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faculties.
     */
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * Faculty findFirstOrThrow
   */
  export type FacultyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faculties.
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faculties.
     */
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * Faculty findMany
   */
  export type FacultyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculties to fetch.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faculties.
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * Faculty create
   */
  export type FacultyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * The data needed to create a Faculty.
     */
    data: XOR<FacultyCreateInput, FacultyUncheckedCreateInput>
  }

  /**
   * Faculty createMany
   */
  export type FacultyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faculties.
     */
    data: FacultyCreateManyInput | FacultyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faculty createManyAndReturn
   */
  export type FacultyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * The data used to create many Faculties.
     */
    data: FacultyCreateManyInput | FacultyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faculty update
   */
  export type FacultyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * The data needed to update a Faculty.
     */
    data: XOR<FacultyUpdateInput, FacultyUncheckedUpdateInput>
    /**
     * Choose, which Faculty to update.
     */
    where: FacultyWhereUniqueInput
  }

  /**
   * Faculty updateMany
   */
  export type FacultyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faculties.
     */
    data: XOR<FacultyUpdateManyMutationInput, FacultyUncheckedUpdateManyInput>
    /**
     * Filter which Faculties to update
     */
    where?: FacultyWhereInput
    /**
     * Limit how many Faculties to update.
     */
    limit?: number
  }

  /**
   * Faculty updateManyAndReturn
   */
  export type FacultyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * The data used to update Faculties.
     */
    data: XOR<FacultyUpdateManyMutationInput, FacultyUncheckedUpdateManyInput>
    /**
     * Filter which Faculties to update
     */
    where?: FacultyWhereInput
    /**
     * Limit how many Faculties to update.
     */
    limit?: number
  }

  /**
   * Faculty upsert
   */
  export type FacultyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * The filter to search for the Faculty to update in case it exists.
     */
    where: FacultyWhereUniqueInput
    /**
     * In case the Faculty found by the `where` argument doesn't exist, create a new Faculty with this data.
     */
    create: XOR<FacultyCreateInput, FacultyUncheckedCreateInput>
    /**
     * In case the Faculty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultyUpdateInput, FacultyUncheckedUpdateInput>
  }

  /**
   * Faculty delete
   */
  export type FacultyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter which Faculty to delete.
     */
    where: FacultyWhereUniqueInput
  }

  /**
   * Faculty deleteMany
   */
  export type FacultyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faculties to delete
     */
    where?: FacultyWhereInput
    /**
     * Limit how many Faculties to delete.
     */
    limit?: number
  }

  /**
   * Faculty.contactStudents
   */
  export type Faculty$contactStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactStudents
     */
    select?: ContactStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactStudents
     */
    omit?: ContactStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactStudentsInclude<ExtArgs> | null
    where?: ContactStudentsWhereInput
    orderBy?: ContactStudentsOrderByWithRelationInput | ContactStudentsOrderByWithRelationInput[]
    cursor?: ContactStudentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactStudentsScalarFieldEnum | ContactStudentsScalarFieldEnum[]
  }

  /**
   * Faculty.contactTeachers
   */
  export type Faculty$contactTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTeachers
     */
    select?: ContactTeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTeachers
     */
    omit?: ContactTeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTeachersInclude<ExtArgs> | null
    where?: ContactTeachersWhereInput
    orderBy?: ContactTeachersOrderByWithRelationInput | ContactTeachersOrderByWithRelationInput[]
    cursor?: ContactTeachersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactTeachersScalarFieldEnum | ContactTeachersScalarFieldEnum[]
  }

  /**
   * Faculty.contactManagement
   */
  export type Faculty$contactManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactManagement
     */
    select?: ContactManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactManagement
     */
    omit?: ContactManagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactManagementInclude<ExtArgs> | null
    where?: ContactManagementWhereInput
    orderBy?: ContactManagementOrderByWithRelationInput | ContactManagementOrderByWithRelationInput[]
    cursor?: ContactManagementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactManagementScalarFieldEnum | ContactManagementScalarFieldEnum[]
  }

  /**
   * Faculty without action
   */
  export type FacultyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
  }


  /**
   * Model ContactStudents
   */

  export type AggregateContactStudents = {
    _count: ContactStudentsCountAggregateOutputType | null
    _avg: ContactStudentsAvgAggregateOutputType | null
    _sum: ContactStudentsSumAggregateOutputType | null
    _min: ContactStudentsMinAggregateOutputType | null
    _max: ContactStudentsMaxAggregateOutputType | null
  }

  export type ContactStudentsAvgAggregateOutputType = {
    id: number | null
    facultyId: number | null
    batchId: number | null
  }

  export type ContactStudentsSumAggregateOutputType = {
    id: number | null
    facultyId: number | null
    batchId: number | null
  }

  export type ContactStudentsMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    facultyId: number | null
    batchId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactStudentsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    facultyId: number | null
    batchId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactStudentsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    facultyId: number
    batchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactStudentsAvgAggregateInputType = {
    id?: true
    facultyId?: true
    batchId?: true
  }

  export type ContactStudentsSumAggregateInputType = {
    id?: true
    facultyId?: true
    batchId?: true
  }

  export type ContactStudentsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    facultyId?: true
    batchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactStudentsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    facultyId?: true
    batchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactStudentsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    facultyId?: true
    batchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactStudentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactStudents to aggregate.
     */
    where?: ContactStudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactStudents to fetch.
     */
    orderBy?: ContactStudentsOrderByWithRelationInput | ContactStudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactStudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactStudents
    **/
    _count?: true | ContactStudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactStudentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactStudentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactStudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactStudentsMaxAggregateInputType
  }

  export type GetContactStudentsAggregateType<T extends ContactStudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateContactStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactStudents[P]>
      : GetScalarType<T[P], AggregateContactStudents[P]>
  }




  export type ContactStudentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactStudentsWhereInput
    orderBy?: ContactStudentsOrderByWithAggregationInput | ContactStudentsOrderByWithAggregationInput[]
    by: ContactStudentsScalarFieldEnum[] | ContactStudentsScalarFieldEnum
    having?: ContactStudentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactStudentsCountAggregateInputType | true
    _avg?: ContactStudentsAvgAggregateInputType
    _sum?: ContactStudentsSumAggregateInputType
    _min?: ContactStudentsMinAggregateInputType
    _max?: ContactStudentsMaxAggregateInputType
  }

  export type ContactStudentsGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    facultyId: number
    batchId: number
    createdAt: Date
    updatedAt: Date
    _count: ContactStudentsCountAggregateOutputType | null
    _avg: ContactStudentsAvgAggregateOutputType | null
    _sum: ContactStudentsSumAggregateOutputType | null
    _min: ContactStudentsMinAggregateOutputType | null
    _max: ContactStudentsMaxAggregateOutputType | null
  }

  type GetContactStudentsGroupByPayload<T extends ContactStudentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactStudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactStudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactStudentsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactStudentsGroupByOutputType[P]>
        }
      >
    >


  export type ContactStudentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    facultyId?: boolean
    batchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactStudents"]>

  export type ContactStudentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    facultyId?: boolean
    batchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactStudents"]>

  export type ContactStudentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    facultyId?: boolean
    batchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactStudents"]>

  export type ContactStudentsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    facultyId?: boolean
    batchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactStudentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "facultyId" | "batchId" | "createdAt" | "updatedAt", ExtArgs["result"]["contactStudents"]>
  export type ContactStudentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }
  export type ContactStudentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }
  export type ContactStudentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }

  export type $ContactStudentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactStudents"
    objects: {
      faculty: Prisma.$FacultyPayload<ExtArgs>
      batch: Prisma.$BatchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      facultyId: number
      batchId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactStudents"]>
    composites: {}
  }

  type ContactStudentsGetPayload<S extends boolean | null | undefined | ContactStudentsDefaultArgs> = $Result.GetResult<Prisma.$ContactStudentsPayload, S>

  type ContactStudentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactStudentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactStudentsCountAggregateInputType | true
    }

  export interface ContactStudentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactStudents'], meta: { name: 'ContactStudents' } }
    /**
     * Find zero or one ContactStudents that matches the filter.
     * @param {ContactStudentsFindUniqueArgs} args - Arguments to find a ContactStudents
     * @example
     * // Get one ContactStudents
     * const contactStudents = await prisma.contactStudents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactStudentsFindUniqueArgs>(args: SelectSubset<T, ContactStudentsFindUniqueArgs<ExtArgs>>): Prisma__ContactStudentsClient<$Result.GetResult<Prisma.$ContactStudentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactStudents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactStudentsFindUniqueOrThrowArgs} args - Arguments to find a ContactStudents
     * @example
     * // Get one ContactStudents
     * const contactStudents = await prisma.contactStudents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactStudentsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactStudentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactStudentsClient<$Result.GetResult<Prisma.$ContactStudentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactStudents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactStudentsFindFirstArgs} args - Arguments to find a ContactStudents
     * @example
     * // Get one ContactStudents
     * const contactStudents = await prisma.contactStudents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactStudentsFindFirstArgs>(args?: SelectSubset<T, ContactStudentsFindFirstArgs<ExtArgs>>): Prisma__ContactStudentsClient<$Result.GetResult<Prisma.$ContactStudentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactStudents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactStudentsFindFirstOrThrowArgs} args - Arguments to find a ContactStudents
     * @example
     * // Get one ContactStudents
     * const contactStudents = await prisma.contactStudents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactStudentsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactStudentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactStudentsClient<$Result.GetResult<Prisma.$ContactStudentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactStudents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactStudentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactStudents
     * const contactStudents = await prisma.contactStudents.findMany()
     * 
     * // Get first 10 ContactStudents
     * const contactStudents = await prisma.contactStudents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactStudentsWithIdOnly = await prisma.contactStudents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactStudentsFindManyArgs>(args?: SelectSubset<T, ContactStudentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactStudentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactStudents.
     * @param {ContactStudentsCreateArgs} args - Arguments to create a ContactStudents.
     * @example
     * // Create one ContactStudents
     * const ContactStudents = await prisma.contactStudents.create({
     *   data: {
     *     // ... data to create a ContactStudents
     *   }
     * })
     * 
     */
    create<T extends ContactStudentsCreateArgs>(args: SelectSubset<T, ContactStudentsCreateArgs<ExtArgs>>): Prisma__ContactStudentsClient<$Result.GetResult<Prisma.$ContactStudentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactStudents.
     * @param {ContactStudentsCreateManyArgs} args - Arguments to create many ContactStudents.
     * @example
     * // Create many ContactStudents
     * const contactStudents = await prisma.contactStudents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactStudentsCreateManyArgs>(args?: SelectSubset<T, ContactStudentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactStudents and returns the data saved in the database.
     * @param {ContactStudentsCreateManyAndReturnArgs} args - Arguments to create many ContactStudents.
     * @example
     * // Create many ContactStudents
     * const contactStudents = await prisma.contactStudents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactStudents and only return the `id`
     * const contactStudentsWithIdOnly = await prisma.contactStudents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactStudentsCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactStudentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactStudentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactStudents.
     * @param {ContactStudentsDeleteArgs} args - Arguments to delete one ContactStudents.
     * @example
     * // Delete one ContactStudents
     * const ContactStudents = await prisma.contactStudents.delete({
     *   where: {
     *     // ... filter to delete one ContactStudents
     *   }
     * })
     * 
     */
    delete<T extends ContactStudentsDeleteArgs>(args: SelectSubset<T, ContactStudentsDeleteArgs<ExtArgs>>): Prisma__ContactStudentsClient<$Result.GetResult<Prisma.$ContactStudentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactStudents.
     * @param {ContactStudentsUpdateArgs} args - Arguments to update one ContactStudents.
     * @example
     * // Update one ContactStudents
     * const contactStudents = await prisma.contactStudents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactStudentsUpdateArgs>(args: SelectSubset<T, ContactStudentsUpdateArgs<ExtArgs>>): Prisma__ContactStudentsClient<$Result.GetResult<Prisma.$ContactStudentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactStudents.
     * @param {ContactStudentsDeleteManyArgs} args - Arguments to filter ContactStudents to delete.
     * @example
     * // Delete a few ContactStudents
     * const { count } = await prisma.contactStudents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactStudentsDeleteManyArgs>(args?: SelectSubset<T, ContactStudentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactStudentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactStudents
     * const contactStudents = await prisma.contactStudents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactStudentsUpdateManyArgs>(args: SelectSubset<T, ContactStudentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactStudents and returns the data updated in the database.
     * @param {ContactStudentsUpdateManyAndReturnArgs} args - Arguments to update many ContactStudents.
     * @example
     * // Update many ContactStudents
     * const contactStudents = await prisma.contactStudents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactStudents and only return the `id`
     * const contactStudentsWithIdOnly = await prisma.contactStudents.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactStudentsUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactStudentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactStudentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactStudents.
     * @param {ContactStudentsUpsertArgs} args - Arguments to update or create a ContactStudents.
     * @example
     * // Update or create a ContactStudents
     * const contactStudents = await prisma.contactStudents.upsert({
     *   create: {
     *     // ... data to create a ContactStudents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactStudents we want to update
     *   }
     * })
     */
    upsert<T extends ContactStudentsUpsertArgs>(args: SelectSubset<T, ContactStudentsUpsertArgs<ExtArgs>>): Prisma__ContactStudentsClient<$Result.GetResult<Prisma.$ContactStudentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactStudentsCountArgs} args - Arguments to filter ContactStudents to count.
     * @example
     * // Count the number of ContactStudents
     * const count = await prisma.contactStudents.count({
     *   where: {
     *     // ... the filter for the ContactStudents we want to count
     *   }
     * })
    **/
    count<T extends ContactStudentsCountArgs>(
      args?: Subset<T, ContactStudentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactStudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactStudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactStudentsAggregateArgs>(args: Subset<T, ContactStudentsAggregateArgs>): Prisma.PrismaPromise<GetContactStudentsAggregateType<T>>

    /**
     * Group by ContactStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactStudentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactStudentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactStudentsGroupByArgs['orderBy'] }
        : { orderBy?: ContactStudentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactStudentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactStudents model
   */
  readonly fields: ContactStudentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactStudents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactStudentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faculty<T extends FacultyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultyDefaultArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    batch<T extends BatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BatchDefaultArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactStudents model
   */
  interface ContactStudentsFieldRefs {
    readonly id: FieldRef<"ContactStudents", 'Int'>
    readonly name: FieldRef<"ContactStudents", 'String'>
    readonly email: FieldRef<"ContactStudents", 'String'>
    readonly phone: FieldRef<"ContactStudents", 'String'>
    readonly facultyId: FieldRef<"ContactStudents", 'Int'>
    readonly batchId: FieldRef<"ContactStudents", 'Int'>
    readonly createdAt: FieldRef<"ContactStudents", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactStudents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactStudents findUnique
   */
  export type ContactStudentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactStudents
     */
    select?: ContactStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactStudents
     */
    omit?: ContactStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactStudentsInclude<ExtArgs> | null
    /**
     * Filter, which ContactStudents to fetch.
     */
    where: ContactStudentsWhereUniqueInput
  }

  /**
   * ContactStudents findUniqueOrThrow
   */
  export type ContactStudentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactStudents
     */
    select?: ContactStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactStudents
     */
    omit?: ContactStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactStudentsInclude<ExtArgs> | null
    /**
     * Filter, which ContactStudents to fetch.
     */
    where: ContactStudentsWhereUniqueInput
  }

  /**
   * ContactStudents findFirst
   */
  export type ContactStudentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactStudents
     */
    select?: ContactStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactStudents
     */
    omit?: ContactStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactStudentsInclude<ExtArgs> | null
    /**
     * Filter, which ContactStudents to fetch.
     */
    where?: ContactStudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactStudents to fetch.
     */
    orderBy?: ContactStudentsOrderByWithRelationInput | ContactStudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactStudents.
     */
    cursor?: ContactStudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactStudents.
     */
    distinct?: ContactStudentsScalarFieldEnum | ContactStudentsScalarFieldEnum[]
  }

  /**
   * ContactStudents findFirstOrThrow
   */
  export type ContactStudentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactStudents
     */
    select?: ContactStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactStudents
     */
    omit?: ContactStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactStudentsInclude<ExtArgs> | null
    /**
     * Filter, which ContactStudents to fetch.
     */
    where?: ContactStudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactStudents to fetch.
     */
    orderBy?: ContactStudentsOrderByWithRelationInput | ContactStudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactStudents.
     */
    cursor?: ContactStudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactStudents.
     */
    distinct?: ContactStudentsScalarFieldEnum | ContactStudentsScalarFieldEnum[]
  }

  /**
   * ContactStudents findMany
   */
  export type ContactStudentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactStudents
     */
    select?: ContactStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactStudents
     */
    omit?: ContactStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactStudentsInclude<ExtArgs> | null
    /**
     * Filter, which ContactStudents to fetch.
     */
    where?: ContactStudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactStudents to fetch.
     */
    orderBy?: ContactStudentsOrderByWithRelationInput | ContactStudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactStudents.
     */
    cursor?: ContactStudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactStudents.
     */
    skip?: number
    distinct?: ContactStudentsScalarFieldEnum | ContactStudentsScalarFieldEnum[]
  }

  /**
   * ContactStudents create
   */
  export type ContactStudentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactStudents
     */
    select?: ContactStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactStudents
     */
    omit?: ContactStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactStudentsInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactStudents.
     */
    data: XOR<ContactStudentsCreateInput, ContactStudentsUncheckedCreateInput>
  }

  /**
   * ContactStudents createMany
   */
  export type ContactStudentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactStudents.
     */
    data: ContactStudentsCreateManyInput | ContactStudentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactStudents createManyAndReturn
   */
  export type ContactStudentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactStudents
     */
    select?: ContactStudentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactStudents
     */
    omit?: ContactStudentsOmit<ExtArgs> | null
    /**
     * The data used to create many ContactStudents.
     */
    data: ContactStudentsCreateManyInput | ContactStudentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactStudentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactStudents update
   */
  export type ContactStudentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactStudents
     */
    select?: ContactStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactStudents
     */
    omit?: ContactStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactStudentsInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactStudents.
     */
    data: XOR<ContactStudentsUpdateInput, ContactStudentsUncheckedUpdateInput>
    /**
     * Choose, which ContactStudents to update.
     */
    where: ContactStudentsWhereUniqueInput
  }

  /**
   * ContactStudents updateMany
   */
  export type ContactStudentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactStudents.
     */
    data: XOR<ContactStudentsUpdateManyMutationInput, ContactStudentsUncheckedUpdateManyInput>
    /**
     * Filter which ContactStudents to update
     */
    where?: ContactStudentsWhereInput
    /**
     * Limit how many ContactStudents to update.
     */
    limit?: number
  }

  /**
   * ContactStudents updateManyAndReturn
   */
  export type ContactStudentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactStudents
     */
    select?: ContactStudentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactStudents
     */
    omit?: ContactStudentsOmit<ExtArgs> | null
    /**
     * The data used to update ContactStudents.
     */
    data: XOR<ContactStudentsUpdateManyMutationInput, ContactStudentsUncheckedUpdateManyInput>
    /**
     * Filter which ContactStudents to update
     */
    where?: ContactStudentsWhereInput
    /**
     * Limit how many ContactStudents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactStudentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactStudents upsert
   */
  export type ContactStudentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactStudents
     */
    select?: ContactStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactStudents
     */
    omit?: ContactStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactStudentsInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactStudents to update in case it exists.
     */
    where: ContactStudentsWhereUniqueInput
    /**
     * In case the ContactStudents found by the `where` argument doesn't exist, create a new ContactStudents with this data.
     */
    create: XOR<ContactStudentsCreateInput, ContactStudentsUncheckedCreateInput>
    /**
     * In case the ContactStudents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactStudentsUpdateInput, ContactStudentsUncheckedUpdateInput>
  }

  /**
   * ContactStudents delete
   */
  export type ContactStudentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactStudents
     */
    select?: ContactStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactStudents
     */
    omit?: ContactStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactStudentsInclude<ExtArgs> | null
    /**
     * Filter which ContactStudents to delete.
     */
    where: ContactStudentsWhereUniqueInput
  }

  /**
   * ContactStudents deleteMany
   */
  export type ContactStudentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactStudents to delete
     */
    where?: ContactStudentsWhereInput
    /**
     * Limit how many ContactStudents to delete.
     */
    limit?: number
  }

  /**
   * ContactStudents without action
   */
  export type ContactStudentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactStudents
     */
    select?: ContactStudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactStudents
     */
    omit?: ContactStudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactStudentsInclude<ExtArgs> | null
  }


  /**
   * Model ContactTeachers
   */

  export type AggregateContactTeachers = {
    _count: ContactTeachersCountAggregateOutputType | null
    _avg: ContactTeachersAvgAggregateOutputType | null
    _sum: ContactTeachersSumAggregateOutputType | null
    _min: ContactTeachersMinAggregateOutputType | null
    _max: ContactTeachersMaxAggregateOutputType | null
  }

  export type ContactTeachersAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactTeachersSumAggregateOutputType = {
    id: number | null
  }

  export type ContactTeachersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    status: $Enums.EmployeeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactTeachersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    status: $Enums.EmployeeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactTeachersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactTeachersAvgAggregateInputType = {
    id?: true
  }

  export type ContactTeachersSumAggregateInputType = {
    id?: true
  }

  export type ContactTeachersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactTeachersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactTeachersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactTeachersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactTeachers to aggregate.
     */
    where?: ContactTeachersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactTeachers to fetch.
     */
    orderBy?: ContactTeachersOrderByWithRelationInput | ContactTeachersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactTeachersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactTeachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactTeachers
    **/
    _count?: true | ContactTeachersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactTeachersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactTeachersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactTeachersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactTeachersMaxAggregateInputType
  }

  export type GetContactTeachersAggregateType<T extends ContactTeachersAggregateArgs> = {
        [P in keyof T & keyof AggregateContactTeachers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactTeachers[P]>
      : GetScalarType<T[P], AggregateContactTeachers[P]>
  }




  export type ContactTeachersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactTeachersWhereInput
    orderBy?: ContactTeachersOrderByWithAggregationInput | ContactTeachersOrderByWithAggregationInput[]
    by: ContactTeachersScalarFieldEnum[] | ContactTeachersScalarFieldEnum
    having?: ContactTeachersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactTeachersCountAggregateInputType | true
    _avg?: ContactTeachersAvgAggregateInputType
    _sum?: ContactTeachersSumAggregateInputType
    _min?: ContactTeachersMinAggregateInputType
    _max?: ContactTeachersMaxAggregateInputType
  }

  export type ContactTeachersGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt: Date
    updatedAt: Date
    _count: ContactTeachersCountAggregateOutputType | null
    _avg: ContactTeachersAvgAggregateOutputType | null
    _sum: ContactTeachersSumAggregateOutputType | null
    _min: ContactTeachersMinAggregateOutputType | null
    _max: ContactTeachersMaxAggregateOutputType | null
  }

  type GetContactTeachersGroupByPayload<T extends ContactTeachersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactTeachersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactTeachersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactTeachersGroupByOutputType[P]>
            : GetScalarType<T[P], ContactTeachersGroupByOutputType[P]>
        }
      >
    >


  export type ContactTeachersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    faculties?: boolean | ContactTeachers$facultiesArgs<ExtArgs>
    batches?: boolean | ContactTeachers$batchesArgs<ExtArgs>
    _count?: boolean | ContactTeachersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactTeachers"]>

  export type ContactTeachersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactTeachers"]>

  export type ContactTeachersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactTeachers"]>

  export type ContactTeachersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactTeachersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["contactTeachers"]>
  export type ContactTeachersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculties?: boolean | ContactTeachers$facultiesArgs<ExtArgs>
    batches?: boolean | ContactTeachers$batchesArgs<ExtArgs>
    _count?: boolean | ContactTeachersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactTeachersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ContactTeachersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContactTeachersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactTeachers"
    objects: {
      faculties: Prisma.$FacultyPayload<ExtArgs>[]
      batches: Prisma.$BatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      status: $Enums.EmployeeStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactTeachers"]>
    composites: {}
  }

  type ContactTeachersGetPayload<S extends boolean | null | undefined | ContactTeachersDefaultArgs> = $Result.GetResult<Prisma.$ContactTeachersPayload, S>

  type ContactTeachersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactTeachersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactTeachersCountAggregateInputType | true
    }

  export interface ContactTeachersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactTeachers'], meta: { name: 'ContactTeachers' } }
    /**
     * Find zero or one ContactTeachers that matches the filter.
     * @param {ContactTeachersFindUniqueArgs} args - Arguments to find a ContactTeachers
     * @example
     * // Get one ContactTeachers
     * const contactTeachers = await prisma.contactTeachers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactTeachersFindUniqueArgs>(args: SelectSubset<T, ContactTeachersFindUniqueArgs<ExtArgs>>): Prisma__ContactTeachersClient<$Result.GetResult<Prisma.$ContactTeachersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactTeachers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactTeachersFindUniqueOrThrowArgs} args - Arguments to find a ContactTeachers
     * @example
     * // Get one ContactTeachers
     * const contactTeachers = await prisma.contactTeachers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactTeachersFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactTeachersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactTeachersClient<$Result.GetResult<Prisma.$ContactTeachersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactTeachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTeachersFindFirstArgs} args - Arguments to find a ContactTeachers
     * @example
     * // Get one ContactTeachers
     * const contactTeachers = await prisma.contactTeachers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactTeachersFindFirstArgs>(args?: SelectSubset<T, ContactTeachersFindFirstArgs<ExtArgs>>): Prisma__ContactTeachersClient<$Result.GetResult<Prisma.$ContactTeachersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactTeachers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTeachersFindFirstOrThrowArgs} args - Arguments to find a ContactTeachers
     * @example
     * // Get one ContactTeachers
     * const contactTeachers = await prisma.contactTeachers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactTeachersFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactTeachersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactTeachersClient<$Result.GetResult<Prisma.$ContactTeachersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactTeachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTeachersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactTeachers
     * const contactTeachers = await prisma.contactTeachers.findMany()
     * 
     * // Get first 10 ContactTeachers
     * const contactTeachers = await prisma.contactTeachers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactTeachersWithIdOnly = await prisma.contactTeachers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactTeachersFindManyArgs>(args?: SelectSubset<T, ContactTeachersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactTeachersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactTeachers.
     * @param {ContactTeachersCreateArgs} args - Arguments to create a ContactTeachers.
     * @example
     * // Create one ContactTeachers
     * const ContactTeachers = await prisma.contactTeachers.create({
     *   data: {
     *     // ... data to create a ContactTeachers
     *   }
     * })
     * 
     */
    create<T extends ContactTeachersCreateArgs>(args: SelectSubset<T, ContactTeachersCreateArgs<ExtArgs>>): Prisma__ContactTeachersClient<$Result.GetResult<Prisma.$ContactTeachersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactTeachers.
     * @param {ContactTeachersCreateManyArgs} args - Arguments to create many ContactTeachers.
     * @example
     * // Create many ContactTeachers
     * const contactTeachers = await prisma.contactTeachers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactTeachersCreateManyArgs>(args?: SelectSubset<T, ContactTeachersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactTeachers and returns the data saved in the database.
     * @param {ContactTeachersCreateManyAndReturnArgs} args - Arguments to create many ContactTeachers.
     * @example
     * // Create many ContactTeachers
     * const contactTeachers = await prisma.contactTeachers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactTeachers and only return the `id`
     * const contactTeachersWithIdOnly = await prisma.contactTeachers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactTeachersCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactTeachersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactTeachersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactTeachers.
     * @param {ContactTeachersDeleteArgs} args - Arguments to delete one ContactTeachers.
     * @example
     * // Delete one ContactTeachers
     * const ContactTeachers = await prisma.contactTeachers.delete({
     *   where: {
     *     // ... filter to delete one ContactTeachers
     *   }
     * })
     * 
     */
    delete<T extends ContactTeachersDeleteArgs>(args: SelectSubset<T, ContactTeachersDeleteArgs<ExtArgs>>): Prisma__ContactTeachersClient<$Result.GetResult<Prisma.$ContactTeachersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactTeachers.
     * @param {ContactTeachersUpdateArgs} args - Arguments to update one ContactTeachers.
     * @example
     * // Update one ContactTeachers
     * const contactTeachers = await prisma.contactTeachers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactTeachersUpdateArgs>(args: SelectSubset<T, ContactTeachersUpdateArgs<ExtArgs>>): Prisma__ContactTeachersClient<$Result.GetResult<Prisma.$ContactTeachersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactTeachers.
     * @param {ContactTeachersDeleteManyArgs} args - Arguments to filter ContactTeachers to delete.
     * @example
     * // Delete a few ContactTeachers
     * const { count } = await prisma.contactTeachers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactTeachersDeleteManyArgs>(args?: SelectSubset<T, ContactTeachersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactTeachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTeachersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactTeachers
     * const contactTeachers = await prisma.contactTeachers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactTeachersUpdateManyArgs>(args: SelectSubset<T, ContactTeachersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactTeachers and returns the data updated in the database.
     * @param {ContactTeachersUpdateManyAndReturnArgs} args - Arguments to update many ContactTeachers.
     * @example
     * // Update many ContactTeachers
     * const contactTeachers = await prisma.contactTeachers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactTeachers and only return the `id`
     * const contactTeachersWithIdOnly = await prisma.contactTeachers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactTeachersUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactTeachersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactTeachersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactTeachers.
     * @param {ContactTeachersUpsertArgs} args - Arguments to update or create a ContactTeachers.
     * @example
     * // Update or create a ContactTeachers
     * const contactTeachers = await prisma.contactTeachers.upsert({
     *   create: {
     *     // ... data to create a ContactTeachers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactTeachers we want to update
     *   }
     * })
     */
    upsert<T extends ContactTeachersUpsertArgs>(args: SelectSubset<T, ContactTeachersUpsertArgs<ExtArgs>>): Prisma__ContactTeachersClient<$Result.GetResult<Prisma.$ContactTeachersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactTeachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTeachersCountArgs} args - Arguments to filter ContactTeachers to count.
     * @example
     * // Count the number of ContactTeachers
     * const count = await prisma.contactTeachers.count({
     *   where: {
     *     // ... the filter for the ContactTeachers we want to count
     *   }
     * })
    **/
    count<T extends ContactTeachersCountArgs>(
      args?: Subset<T, ContactTeachersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactTeachersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactTeachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTeachersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactTeachersAggregateArgs>(args: Subset<T, ContactTeachersAggregateArgs>): Prisma.PrismaPromise<GetContactTeachersAggregateType<T>>

    /**
     * Group by ContactTeachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTeachersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactTeachersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactTeachersGroupByArgs['orderBy'] }
        : { orderBy?: ContactTeachersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactTeachersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactTeachersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactTeachers model
   */
  readonly fields: ContactTeachersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactTeachers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactTeachersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faculties<T extends ContactTeachers$facultiesArgs<ExtArgs> = {}>(args?: Subset<T, ContactTeachers$facultiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    batches<T extends ContactTeachers$batchesArgs<ExtArgs> = {}>(args?: Subset<T, ContactTeachers$batchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactTeachers model
   */
  interface ContactTeachersFieldRefs {
    readonly id: FieldRef<"ContactTeachers", 'Int'>
    readonly name: FieldRef<"ContactTeachers", 'String'>
    readonly email: FieldRef<"ContactTeachers", 'String'>
    readonly phone: FieldRef<"ContactTeachers", 'String'>
    readonly status: FieldRef<"ContactTeachers", 'EmployeeStatus'>
    readonly createdAt: FieldRef<"ContactTeachers", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactTeachers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactTeachers findUnique
   */
  export type ContactTeachersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTeachers
     */
    select?: ContactTeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTeachers
     */
    omit?: ContactTeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTeachersInclude<ExtArgs> | null
    /**
     * Filter, which ContactTeachers to fetch.
     */
    where: ContactTeachersWhereUniqueInput
  }

  /**
   * ContactTeachers findUniqueOrThrow
   */
  export type ContactTeachersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTeachers
     */
    select?: ContactTeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTeachers
     */
    omit?: ContactTeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTeachersInclude<ExtArgs> | null
    /**
     * Filter, which ContactTeachers to fetch.
     */
    where: ContactTeachersWhereUniqueInput
  }

  /**
   * ContactTeachers findFirst
   */
  export type ContactTeachersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTeachers
     */
    select?: ContactTeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTeachers
     */
    omit?: ContactTeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTeachersInclude<ExtArgs> | null
    /**
     * Filter, which ContactTeachers to fetch.
     */
    where?: ContactTeachersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactTeachers to fetch.
     */
    orderBy?: ContactTeachersOrderByWithRelationInput | ContactTeachersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactTeachers.
     */
    cursor?: ContactTeachersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactTeachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactTeachers.
     */
    distinct?: ContactTeachersScalarFieldEnum | ContactTeachersScalarFieldEnum[]
  }

  /**
   * ContactTeachers findFirstOrThrow
   */
  export type ContactTeachersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTeachers
     */
    select?: ContactTeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTeachers
     */
    omit?: ContactTeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTeachersInclude<ExtArgs> | null
    /**
     * Filter, which ContactTeachers to fetch.
     */
    where?: ContactTeachersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactTeachers to fetch.
     */
    orderBy?: ContactTeachersOrderByWithRelationInput | ContactTeachersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactTeachers.
     */
    cursor?: ContactTeachersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactTeachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactTeachers.
     */
    distinct?: ContactTeachersScalarFieldEnum | ContactTeachersScalarFieldEnum[]
  }

  /**
   * ContactTeachers findMany
   */
  export type ContactTeachersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTeachers
     */
    select?: ContactTeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTeachers
     */
    omit?: ContactTeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTeachersInclude<ExtArgs> | null
    /**
     * Filter, which ContactTeachers to fetch.
     */
    where?: ContactTeachersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactTeachers to fetch.
     */
    orderBy?: ContactTeachersOrderByWithRelationInput | ContactTeachersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactTeachers.
     */
    cursor?: ContactTeachersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactTeachers.
     */
    skip?: number
    distinct?: ContactTeachersScalarFieldEnum | ContactTeachersScalarFieldEnum[]
  }

  /**
   * ContactTeachers create
   */
  export type ContactTeachersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTeachers
     */
    select?: ContactTeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTeachers
     */
    omit?: ContactTeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTeachersInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactTeachers.
     */
    data: XOR<ContactTeachersCreateInput, ContactTeachersUncheckedCreateInput>
  }

  /**
   * ContactTeachers createMany
   */
  export type ContactTeachersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactTeachers.
     */
    data: ContactTeachersCreateManyInput | ContactTeachersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactTeachers createManyAndReturn
   */
  export type ContactTeachersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTeachers
     */
    select?: ContactTeachersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTeachers
     */
    omit?: ContactTeachersOmit<ExtArgs> | null
    /**
     * The data used to create many ContactTeachers.
     */
    data: ContactTeachersCreateManyInput | ContactTeachersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactTeachers update
   */
  export type ContactTeachersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTeachers
     */
    select?: ContactTeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTeachers
     */
    omit?: ContactTeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTeachersInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactTeachers.
     */
    data: XOR<ContactTeachersUpdateInput, ContactTeachersUncheckedUpdateInput>
    /**
     * Choose, which ContactTeachers to update.
     */
    where: ContactTeachersWhereUniqueInput
  }

  /**
   * ContactTeachers updateMany
   */
  export type ContactTeachersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactTeachers.
     */
    data: XOR<ContactTeachersUpdateManyMutationInput, ContactTeachersUncheckedUpdateManyInput>
    /**
     * Filter which ContactTeachers to update
     */
    where?: ContactTeachersWhereInput
    /**
     * Limit how many ContactTeachers to update.
     */
    limit?: number
  }

  /**
   * ContactTeachers updateManyAndReturn
   */
  export type ContactTeachersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTeachers
     */
    select?: ContactTeachersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTeachers
     */
    omit?: ContactTeachersOmit<ExtArgs> | null
    /**
     * The data used to update ContactTeachers.
     */
    data: XOR<ContactTeachersUpdateManyMutationInput, ContactTeachersUncheckedUpdateManyInput>
    /**
     * Filter which ContactTeachers to update
     */
    where?: ContactTeachersWhereInput
    /**
     * Limit how many ContactTeachers to update.
     */
    limit?: number
  }

  /**
   * ContactTeachers upsert
   */
  export type ContactTeachersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTeachers
     */
    select?: ContactTeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTeachers
     */
    omit?: ContactTeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTeachersInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactTeachers to update in case it exists.
     */
    where: ContactTeachersWhereUniqueInput
    /**
     * In case the ContactTeachers found by the `where` argument doesn't exist, create a new ContactTeachers with this data.
     */
    create: XOR<ContactTeachersCreateInput, ContactTeachersUncheckedCreateInput>
    /**
     * In case the ContactTeachers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactTeachersUpdateInput, ContactTeachersUncheckedUpdateInput>
  }

  /**
   * ContactTeachers delete
   */
  export type ContactTeachersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTeachers
     */
    select?: ContactTeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTeachers
     */
    omit?: ContactTeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTeachersInclude<ExtArgs> | null
    /**
     * Filter which ContactTeachers to delete.
     */
    where: ContactTeachersWhereUniqueInput
  }

  /**
   * ContactTeachers deleteMany
   */
  export type ContactTeachersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactTeachers to delete
     */
    where?: ContactTeachersWhereInput
    /**
     * Limit how many ContactTeachers to delete.
     */
    limit?: number
  }

  /**
   * ContactTeachers.faculties
   */
  export type ContactTeachers$facultiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    where?: FacultyWhereInput
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    cursor?: FacultyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * ContactTeachers.batches
   */
  export type ContactTeachers$batchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    cursor?: BatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * ContactTeachers without action
   */
  export type ContactTeachersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTeachers
     */
    select?: ContactTeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTeachers
     */
    omit?: ContactTeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactTeachersInclude<ExtArgs> | null
  }


  /**
   * Model ContactManagement
   */

  export type AggregateContactManagement = {
    _count: ContactManagementCountAggregateOutputType | null
    _avg: ContactManagementAvgAggregateOutputType | null
    _sum: ContactManagementSumAggregateOutputType | null
    _min: ContactManagementMinAggregateOutputType | null
    _max: ContactManagementMaxAggregateOutputType | null
  }

  export type ContactManagementAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactManagementSumAggregateOutputType = {
    id: number | null
  }

  export type ContactManagementMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    status: $Enums.EmployeeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactManagementMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    status: $Enums.EmployeeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactManagementCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactManagementAvgAggregateInputType = {
    id?: true
  }

  export type ContactManagementSumAggregateInputType = {
    id?: true
  }

  export type ContactManagementMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactManagementMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactManagementCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactManagementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactManagement to aggregate.
     */
    where?: ContactManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactManagements to fetch.
     */
    orderBy?: ContactManagementOrderByWithRelationInput | ContactManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactManagements
    **/
    _count?: true | ContactManagementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactManagementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactManagementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactManagementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactManagementMaxAggregateInputType
  }

  export type GetContactManagementAggregateType<T extends ContactManagementAggregateArgs> = {
        [P in keyof T & keyof AggregateContactManagement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactManagement[P]>
      : GetScalarType<T[P], AggregateContactManagement[P]>
  }




  export type ContactManagementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactManagementWhereInput
    orderBy?: ContactManagementOrderByWithAggregationInput | ContactManagementOrderByWithAggregationInput[]
    by: ContactManagementScalarFieldEnum[] | ContactManagementScalarFieldEnum
    having?: ContactManagementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactManagementCountAggregateInputType | true
    _avg?: ContactManagementAvgAggregateInputType
    _sum?: ContactManagementSumAggregateInputType
    _min?: ContactManagementMinAggregateInputType
    _max?: ContactManagementMaxAggregateInputType
  }

  export type ContactManagementGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt: Date
    updatedAt: Date
    _count: ContactManagementCountAggregateOutputType | null
    _avg: ContactManagementAvgAggregateOutputType | null
    _sum: ContactManagementSumAggregateOutputType | null
    _min: ContactManagementMinAggregateOutputType | null
    _max: ContactManagementMaxAggregateOutputType | null
  }

  type GetContactManagementGroupByPayload<T extends ContactManagementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactManagementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactManagementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactManagementGroupByOutputType[P]>
            : GetScalarType<T[P], ContactManagementGroupByOutputType[P]>
        }
      >
    >


  export type ContactManagementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    faculties?: boolean | ContactManagement$facultiesArgs<ExtArgs>
    batches?: boolean | ContactManagement$batchesArgs<ExtArgs>
    _count?: boolean | ContactManagementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactManagement"]>

  export type ContactManagementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactManagement"]>

  export type ContactManagementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactManagement"]>

  export type ContactManagementSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactManagementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["contactManagement"]>
  export type ContactManagementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculties?: boolean | ContactManagement$facultiesArgs<ExtArgs>
    batches?: boolean | ContactManagement$batchesArgs<ExtArgs>
    _count?: boolean | ContactManagementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactManagementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ContactManagementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContactManagementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactManagement"
    objects: {
      faculties: Prisma.$FacultyPayload<ExtArgs>[]
      batches: Prisma.$BatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      status: $Enums.EmployeeStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactManagement"]>
    composites: {}
  }

  type ContactManagementGetPayload<S extends boolean | null | undefined | ContactManagementDefaultArgs> = $Result.GetResult<Prisma.$ContactManagementPayload, S>

  type ContactManagementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactManagementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactManagementCountAggregateInputType | true
    }

  export interface ContactManagementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactManagement'], meta: { name: 'ContactManagement' } }
    /**
     * Find zero or one ContactManagement that matches the filter.
     * @param {ContactManagementFindUniqueArgs} args - Arguments to find a ContactManagement
     * @example
     * // Get one ContactManagement
     * const contactManagement = await prisma.contactManagement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactManagementFindUniqueArgs>(args: SelectSubset<T, ContactManagementFindUniqueArgs<ExtArgs>>): Prisma__ContactManagementClient<$Result.GetResult<Prisma.$ContactManagementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactManagement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactManagementFindUniqueOrThrowArgs} args - Arguments to find a ContactManagement
     * @example
     * // Get one ContactManagement
     * const contactManagement = await prisma.contactManagement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactManagementFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactManagementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactManagementClient<$Result.GetResult<Prisma.$ContactManagementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactManagement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactManagementFindFirstArgs} args - Arguments to find a ContactManagement
     * @example
     * // Get one ContactManagement
     * const contactManagement = await prisma.contactManagement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactManagementFindFirstArgs>(args?: SelectSubset<T, ContactManagementFindFirstArgs<ExtArgs>>): Prisma__ContactManagementClient<$Result.GetResult<Prisma.$ContactManagementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactManagement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactManagementFindFirstOrThrowArgs} args - Arguments to find a ContactManagement
     * @example
     * // Get one ContactManagement
     * const contactManagement = await prisma.contactManagement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactManagementFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactManagementFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactManagementClient<$Result.GetResult<Prisma.$ContactManagementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactManagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactManagementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactManagements
     * const contactManagements = await prisma.contactManagement.findMany()
     * 
     * // Get first 10 ContactManagements
     * const contactManagements = await prisma.contactManagement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactManagementWithIdOnly = await prisma.contactManagement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactManagementFindManyArgs>(args?: SelectSubset<T, ContactManagementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactManagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactManagement.
     * @param {ContactManagementCreateArgs} args - Arguments to create a ContactManagement.
     * @example
     * // Create one ContactManagement
     * const ContactManagement = await prisma.contactManagement.create({
     *   data: {
     *     // ... data to create a ContactManagement
     *   }
     * })
     * 
     */
    create<T extends ContactManagementCreateArgs>(args: SelectSubset<T, ContactManagementCreateArgs<ExtArgs>>): Prisma__ContactManagementClient<$Result.GetResult<Prisma.$ContactManagementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactManagements.
     * @param {ContactManagementCreateManyArgs} args - Arguments to create many ContactManagements.
     * @example
     * // Create many ContactManagements
     * const contactManagement = await prisma.contactManagement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactManagementCreateManyArgs>(args?: SelectSubset<T, ContactManagementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactManagements and returns the data saved in the database.
     * @param {ContactManagementCreateManyAndReturnArgs} args - Arguments to create many ContactManagements.
     * @example
     * // Create many ContactManagements
     * const contactManagement = await prisma.contactManagement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactManagements and only return the `id`
     * const contactManagementWithIdOnly = await prisma.contactManagement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactManagementCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactManagementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactManagementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactManagement.
     * @param {ContactManagementDeleteArgs} args - Arguments to delete one ContactManagement.
     * @example
     * // Delete one ContactManagement
     * const ContactManagement = await prisma.contactManagement.delete({
     *   where: {
     *     // ... filter to delete one ContactManagement
     *   }
     * })
     * 
     */
    delete<T extends ContactManagementDeleteArgs>(args: SelectSubset<T, ContactManagementDeleteArgs<ExtArgs>>): Prisma__ContactManagementClient<$Result.GetResult<Prisma.$ContactManagementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactManagement.
     * @param {ContactManagementUpdateArgs} args - Arguments to update one ContactManagement.
     * @example
     * // Update one ContactManagement
     * const contactManagement = await prisma.contactManagement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactManagementUpdateArgs>(args: SelectSubset<T, ContactManagementUpdateArgs<ExtArgs>>): Prisma__ContactManagementClient<$Result.GetResult<Prisma.$ContactManagementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactManagements.
     * @param {ContactManagementDeleteManyArgs} args - Arguments to filter ContactManagements to delete.
     * @example
     * // Delete a few ContactManagements
     * const { count } = await prisma.contactManagement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactManagementDeleteManyArgs>(args?: SelectSubset<T, ContactManagementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactManagementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactManagements
     * const contactManagement = await prisma.contactManagement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactManagementUpdateManyArgs>(args: SelectSubset<T, ContactManagementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactManagements and returns the data updated in the database.
     * @param {ContactManagementUpdateManyAndReturnArgs} args - Arguments to update many ContactManagements.
     * @example
     * // Update many ContactManagements
     * const contactManagement = await prisma.contactManagement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactManagements and only return the `id`
     * const contactManagementWithIdOnly = await prisma.contactManagement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactManagementUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactManagementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactManagementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactManagement.
     * @param {ContactManagementUpsertArgs} args - Arguments to update or create a ContactManagement.
     * @example
     * // Update or create a ContactManagement
     * const contactManagement = await prisma.contactManagement.upsert({
     *   create: {
     *     // ... data to create a ContactManagement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactManagement we want to update
     *   }
     * })
     */
    upsert<T extends ContactManagementUpsertArgs>(args: SelectSubset<T, ContactManagementUpsertArgs<ExtArgs>>): Prisma__ContactManagementClient<$Result.GetResult<Prisma.$ContactManagementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactManagementCountArgs} args - Arguments to filter ContactManagements to count.
     * @example
     * // Count the number of ContactManagements
     * const count = await prisma.contactManagement.count({
     *   where: {
     *     // ... the filter for the ContactManagements we want to count
     *   }
     * })
    **/
    count<T extends ContactManagementCountArgs>(
      args?: Subset<T, ContactManagementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactManagementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactManagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactManagementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactManagementAggregateArgs>(args: Subset<T, ContactManagementAggregateArgs>): Prisma.PrismaPromise<GetContactManagementAggregateType<T>>

    /**
     * Group by ContactManagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactManagementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactManagementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactManagementGroupByArgs['orderBy'] }
        : { orderBy?: ContactManagementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactManagementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactManagementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactManagement model
   */
  readonly fields: ContactManagementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactManagement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactManagementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faculties<T extends ContactManagement$facultiesArgs<ExtArgs> = {}>(args?: Subset<T, ContactManagement$facultiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    batches<T extends ContactManagement$batchesArgs<ExtArgs> = {}>(args?: Subset<T, ContactManagement$batchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactManagement model
   */
  interface ContactManagementFieldRefs {
    readonly id: FieldRef<"ContactManagement", 'Int'>
    readonly name: FieldRef<"ContactManagement", 'String'>
    readonly email: FieldRef<"ContactManagement", 'String'>
    readonly phone: FieldRef<"ContactManagement", 'String'>
    readonly status: FieldRef<"ContactManagement", 'EmployeeStatus'>
    readonly createdAt: FieldRef<"ContactManagement", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactManagement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactManagement findUnique
   */
  export type ContactManagementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactManagement
     */
    select?: ContactManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactManagement
     */
    omit?: ContactManagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactManagementInclude<ExtArgs> | null
    /**
     * Filter, which ContactManagement to fetch.
     */
    where: ContactManagementWhereUniqueInput
  }

  /**
   * ContactManagement findUniqueOrThrow
   */
  export type ContactManagementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactManagement
     */
    select?: ContactManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactManagement
     */
    omit?: ContactManagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactManagementInclude<ExtArgs> | null
    /**
     * Filter, which ContactManagement to fetch.
     */
    where: ContactManagementWhereUniqueInput
  }

  /**
   * ContactManagement findFirst
   */
  export type ContactManagementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactManagement
     */
    select?: ContactManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactManagement
     */
    omit?: ContactManagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactManagementInclude<ExtArgs> | null
    /**
     * Filter, which ContactManagement to fetch.
     */
    where?: ContactManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactManagements to fetch.
     */
    orderBy?: ContactManagementOrderByWithRelationInput | ContactManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactManagements.
     */
    cursor?: ContactManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactManagements.
     */
    distinct?: ContactManagementScalarFieldEnum | ContactManagementScalarFieldEnum[]
  }

  /**
   * ContactManagement findFirstOrThrow
   */
  export type ContactManagementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactManagement
     */
    select?: ContactManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactManagement
     */
    omit?: ContactManagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactManagementInclude<ExtArgs> | null
    /**
     * Filter, which ContactManagement to fetch.
     */
    where?: ContactManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactManagements to fetch.
     */
    orderBy?: ContactManagementOrderByWithRelationInput | ContactManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactManagements.
     */
    cursor?: ContactManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactManagements.
     */
    distinct?: ContactManagementScalarFieldEnum | ContactManagementScalarFieldEnum[]
  }

  /**
   * ContactManagement findMany
   */
  export type ContactManagementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactManagement
     */
    select?: ContactManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactManagement
     */
    omit?: ContactManagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactManagementInclude<ExtArgs> | null
    /**
     * Filter, which ContactManagements to fetch.
     */
    where?: ContactManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactManagements to fetch.
     */
    orderBy?: ContactManagementOrderByWithRelationInput | ContactManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactManagements.
     */
    cursor?: ContactManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactManagements.
     */
    skip?: number
    distinct?: ContactManagementScalarFieldEnum | ContactManagementScalarFieldEnum[]
  }

  /**
   * ContactManagement create
   */
  export type ContactManagementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactManagement
     */
    select?: ContactManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactManagement
     */
    omit?: ContactManagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactManagementInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactManagement.
     */
    data: XOR<ContactManagementCreateInput, ContactManagementUncheckedCreateInput>
  }

  /**
   * ContactManagement createMany
   */
  export type ContactManagementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactManagements.
     */
    data: ContactManagementCreateManyInput | ContactManagementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactManagement createManyAndReturn
   */
  export type ContactManagementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactManagement
     */
    select?: ContactManagementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactManagement
     */
    omit?: ContactManagementOmit<ExtArgs> | null
    /**
     * The data used to create many ContactManagements.
     */
    data: ContactManagementCreateManyInput | ContactManagementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactManagement update
   */
  export type ContactManagementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactManagement
     */
    select?: ContactManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactManagement
     */
    omit?: ContactManagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactManagementInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactManagement.
     */
    data: XOR<ContactManagementUpdateInput, ContactManagementUncheckedUpdateInput>
    /**
     * Choose, which ContactManagement to update.
     */
    where: ContactManagementWhereUniqueInput
  }

  /**
   * ContactManagement updateMany
   */
  export type ContactManagementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactManagements.
     */
    data: XOR<ContactManagementUpdateManyMutationInput, ContactManagementUncheckedUpdateManyInput>
    /**
     * Filter which ContactManagements to update
     */
    where?: ContactManagementWhereInput
    /**
     * Limit how many ContactManagements to update.
     */
    limit?: number
  }

  /**
   * ContactManagement updateManyAndReturn
   */
  export type ContactManagementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactManagement
     */
    select?: ContactManagementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactManagement
     */
    omit?: ContactManagementOmit<ExtArgs> | null
    /**
     * The data used to update ContactManagements.
     */
    data: XOR<ContactManagementUpdateManyMutationInput, ContactManagementUncheckedUpdateManyInput>
    /**
     * Filter which ContactManagements to update
     */
    where?: ContactManagementWhereInput
    /**
     * Limit how many ContactManagements to update.
     */
    limit?: number
  }

  /**
   * ContactManagement upsert
   */
  export type ContactManagementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactManagement
     */
    select?: ContactManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactManagement
     */
    omit?: ContactManagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactManagementInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactManagement to update in case it exists.
     */
    where: ContactManagementWhereUniqueInput
    /**
     * In case the ContactManagement found by the `where` argument doesn't exist, create a new ContactManagement with this data.
     */
    create: XOR<ContactManagementCreateInput, ContactManagementUncheckedCreateInput>
    /**
     * In case the ContactManagement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactManagementUpdateInput, ContactManagementUncheckedUpdateInput>
  }

  /**
   * ContactManagement delete
   */
  export type ContactManagementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactManagement
     */
    select?: ContactManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactManagement
     */
    omit?: ContactManagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactManagementInclude<ExtArgs> | null
    /**
     * Filter which ContactManagement to delete.
     */
    where: ContactManagementWhereUniqueInput
  }

  /**
   * ContactManagement deleteMany
   */
  export type ContactManagementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactManagements to delete
     */
    where?: ContactManagementWhereInput
    /**
     * Limit how many ContactManagements to delete.
     */
    limit?: number
  }

  /**
   * ContactManagement.faculties
   */
  export type ContactManagement$facultiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faculty
     */
    omit?: FacultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    where?: FacultyWhereInput
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    cursor?: FacultyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * ContactManagement.batches
   */
  export type ContactManagement$batchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    cursor?: BatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * ContactManagement without action
   */
  export type ContactManagementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactManagement
     */
    select?: ContactManagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactManagement
     */
    omit?: ContactManagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactManagementInclude<ExtArgs> | null
  }


  /**
   * Model Mailing
   */

  export type AggregateMailing = {
    _count: MailingCountAggregateOutputType | null
    _avg: MailingAvgAggregateOutputType | null
    _sum: MailingSumAggregateOutputType | null
    _min: MailingMinAggregateOutputType | null
    _max: MailingMaxAggregateOutputType | null
  }

  export type MailingAvgAggregateOutputType = {
    id: number | null
  }

  export type MailingSumAggregateOutputType = {
    id: number | null
  }

  export type MailingMinAggregateOutputType = {
    id: number | null
    replyTo: string | null
    subject: string | null
    content: string | null
    createdAt: Date | null
  }

  export type MailingMaxAggregateOutputType = {
    id: number | null
    replyTo: string | null
    subject: string | null
    content: string | null
    createdAt: Date | null
  }

  export type MailingCountAggregateOutputType = {
    id: number
    replyTo: number
    subject: number
    content: number
    createdAt: number
    _all: number
  }


  export type MailingAvgAggregateInputType = {
    id?: true
  }

  export type MailingSumAggregateInputType = {
    id?: true
  }

  export type MailingMinAggregateInputType = {
    id?: true
    replyTo?: true
    subject?: true
    content?: true
    createdAt?: true
  }

  export type MailingMaxAggregateInputType = {
    id?: true
    replyTo?: true
    subject?: true
    content?: true
    createdAt?: true
  }

  export type MailingCountAggregateInputType = {
    id?: true
    replyTo?: true
    subject?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type MailingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mailing to aggregate.
     */
    where?: MailingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mailings to fetch.
     */
    orderBy?: MailingOrderByWithRelationInput | MailingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MailingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mailings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mailings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mailings
    **/
    _count?: true | MailingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MailingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MailingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MailingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MailingMaxAggregateInputType
  }

  export type GetMailingAggregateType<T extends MailingAggregateArgs> = {
        [P in keyof T & keyof AggregateMailing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMailing[P]>
      : GetScalarType<T[P], AggregateMailing[P]>
  }




  export type MailingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MailingWhereInput
    orderBy?: MailingOrderByWithAggregationInput | MailingOrderByWithAggregationInput[]
    by: MailingScalarFieldEnum[] | MailingScalarFieldEnum
    having?: MailingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MailingCountAggregateInputType | true
    _avg?: MailingAvgAggregateInputType
    _sum?: MailingSumAggregateInputType
    _min?: MailingMinAggregateInputType
    _max?: MailingMaxAggregateInputType
  }

  export type MailingGroupByOutputType = {
    id: number
    replyTo: string
    subject: string
    content: string
    createdAt: Date
    _count: MailingCountAggregateOutputType | null
    _avg: MailingAvgAggregateOutputType | null
    _sum: MailingSumAggregateOutputType | null
    _min: MailingMinAggregateOutputType | null
    _max: MailingMaxAggregateOutputType | null
  }

  type GetMailingGroupByPayload<T extends MailingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MailingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MailingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MailingGroupByOutputType[P]>
            : GetScalarType<T[P], MailingGroupByOutputType[P]>
        }
      >
    >


  export type MailingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    replyTo?: boolean
    subject?: boolean
    content?: boolean
    createdAt?: boolean
    recipients?: boolean | Mailing$recipientsArgs<ExtArgs>
    _count?: boolean | MailingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mailing"]>

  export type MailingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    replyTo?: boolean
    subject?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mailing"]>

  export type MailingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    replyTo?: boolean
    subject?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mailing"]>

  export type MailingSelectScalar = {
    id?: boolean
    replyTo?: boolean
    subject?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type MailingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "replyTo" | "subject" | "content" | "createdAt", ExtArgs["result"]["mailing"]>
  export type MailingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipients?: boolean | Mailing$recipientsArgs<ExtArgs>
    _count?: boolean | MailingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MailingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MailingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MailingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mailing"
    objects: {
      recipients: Prisma.$RecipientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      replyTo: string
      subject: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["mailing"]>
    composites: {}
  }

  type MailingGetPayload<S extends boolean | null | undefined | MailingDefaultArgs> = $Result.GetResult<Prisma.$MailingPayload, S>

  type MailingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MailingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MailingCountAggregateInputType | true
    }

  export interface MailingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mailing'], meta: { name: 'Mailing' } }
    /**
     * Find zero or one Mailing that matches the filter.
     * @param {MailingFindUniqueArgs} args - Arguments to find a Mailing
     * @example
     * // Get one Mailing
     * const mailing = await prisma.mailing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MailingFindUniqueArgs>(args: SelectSubset<T, MailingFindUniqueArgs<ExtArgs>>): Prisma__MailingClient<$Result.GetResult<Prisma.$MailingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mailing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MailingFindUniqueOrThrowArgs} args - Arguments to find a Mailing
     * @example
     * // Get one Mailing
     * const mailing = await prisma.mailing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MailingFindUniqueOrThrowArgs>(args: SelectSubset<T, MailingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MailingClient<$Result.GetResult<Prisma.$MailingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mailing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailingFindFirstArgs} args - Arguments to find a Mailing
     * @example
     * // Get one Mailing
     * const mailing = await prisma.mailing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MailingFindFirstArgs>(args?: SelectSubset<T, MailingFindFirstArgs<ExtArgs>>): Prisma__MailingClient<$Result.GetResult<Prisma.$MailingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mailing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailingFindFirstOrThrowArgs} args - Arguments to find a Mailing
     * @example
     * // Get one Mailing
     * const mailing = await prisma.mailing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MailingFindFirstOrThrowArgs>(args?: SelectSubset<T, MailingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MailingClient<$Result.GetResult<Prisma.$MailingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mailings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mailings
     * const mailings = await prisma.mailing.findMany()
     * 
     * // Get first 10 Mailings
     * const mailings = await prisma.mailing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mailingWithIdOnly = await prisma.mailing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MailingFindManyArgs>(args?: SelectSubset<T, MailingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mailing.
     * @param {MailingCreateArgs} args - Arguments to create a Mailing.
     * @example
     * // Create one Mailing
     * const Mailing = await prisma.mailing.create({
     *   data: {
     *     // ... data to create a Mailing
     *   }
     * })
     * 
     */
    create<T extends MailingCreateArgs>(args: SelectSubset<T, MailingCreateArgs<ExtArgs>>): Prisma__MailingClient<$Result.GetResult<Prisma.$MailingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mailings.
     * @param {MailingCreateManyArgs} args - Arguments to create many Mailings.
     * @example
     * // Create many Mailings
     * const mailing = await prisma.mailing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MailingCreateManyArgs>(args?: SelectSubset<T, MailingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mailings and returns the data saved in the database.
     * @param {MailingCreateManyAndReturnArgs} args - Arguments to create many Mailings.
     * @example
     * // Create many Mailings
     * const mailing = await prisma.mailing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mailings and only return the `id`
     * const mailingWithIdOnly = await prisma.mailing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MailingCreateManyAndReturnArgs>(args?: SelectSubset<T, MailingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mailing.
     * @param {MailingDeleteArgs} args - Arguments to delete one Mailing.
     * @example
     * // Delete one Mailing
     * const Mailing = await prisma.mailing.delete({
     *   where: {
     *     // ... filter to delete one Mailing
     *   }
     * })
     * 
     */
    delete<T extends MailingDeleteArgs>(args: SelectSubset<T, MailingDeleteArgs<ExtArgs>>): Prisma__MailingClient<$Result.GetResult<Prisma.$MailingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mailing.
     * @param {MailingUpdateArgs} args - Arguments to update one Mailing.
     * @example
     * // Update one Mailing
     * const mailing = await prisma.mailing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MailingUpdateArgs>(args: SelectSubset<T, MailingUpdateArgs<ExtArgs>>): Prisma__MailingClient<$Result.GetResult<Prisma.$MailingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mailings.
     * @param {MailingDeleteManyArgs} args - Arguments to filter Mailings to delete.
     * @example
     * // Delete a few Mailings
     * const { count } = await prisma.mailing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MailingDeleteManyArgs>(args?: SelectSubset<T, MailingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mailings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mailings
     * const mailing = await prisma.mailing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MailingUpdateManyArgs>(args: SelectSubset<T, MailingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mailings and returns the data updated in the database.
     * @param {MailingUpdateManyAndReturnArgs} args - Arguments to update many Mailings.
     * @example
     * // Update many Mailings
     * const mailing = await prisma.mailing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mailings and only return the `id`
     * const mailingWithIdOnly = await prisma.mailing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MailingUpdateManyAndReturnArgs>(args: SelectSubset<T, MailingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mailing.
     * @param {MailingUpsertArgs} args - Arguments to update or create a Mailing.
     * @example
     * // Update or create a Mailing
     * const mailing = await prisma.mailing.upsert({
     *   create: {
     *     // ... data to create a Mailing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mailing we want to update
     *   }
     * })
     */
    upsert<T extends MailingUpsertArgs>(args: SelectSubset<T, MailingUpsertArgs<ExtArgs>>): Prisma__MailingClient<$Result.GetResult<Prisma.$MailingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mailings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailingCountArgs} args - Arguments to filter Mailings to count.
     * @example
     * // Count the number of Mailings
     * const count = await prisma.mailing.count({
     *   where: {
     *     // ... the filter for the Mailings we want to count
     *   }
     * })
    **/
    count<T extends MailingCountArgs>(
      args?: Subset<T, MailingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MailingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mailing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MailingAggregateArgs>(args: Subset<T, MailingAggregateArgs>): Prisma.PrismaPromise<GetMailingAggregateType<T>>

    /**
     * Group by Mailing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MailingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MailingGroupByArgs['orderBy'] }
        : { orderBy?: MailingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MailingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMailingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mailing model
   */
  readonly fields: MailingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mailing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MailingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipients<T extends Mailing$recipientsArgs<ExtArgs> = {}>(args?: Subset<T, Mailing$recipientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mailing model
   */
  interface MailingFieldRefs {
    readonly id: FieldRef<"Mailing", 'Int'>
    readonly replyTo: FieldRef<"Mailing", 'String'>
    readonly subject: FieldRef<"Mailing", 'String'>
    readonly content: FieldRef<"Mailing", 'String'>
    readonly createdAt: FieldRef<"Mailing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mailing findUnique
   */
  export type MailingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mailing
     */
    select?: MailingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mailing
     */
    omit?: MailingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailingInclude<ExtArgs> | null
    /**
     * Filter, which Mailing to fetch.
     */
    where: MailingWhereUniqueInput
  }

  /**
   * Mailing findUniqueOrThrow
   */
  export type MailingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mailing
     */
    select?: MailingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mailing
     */
    omit?: MailingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailingInclude<ExtArgs> | null
    /**
     * Filter, which Mailing to fetch.
     */
    where: MailingWhereUniqueInput
  }

  /**
   * Mailing findFirst
   */
  export type MailingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mailing
     */
    select?: MailingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mailing
     */
    omit?: MailingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailingInclude<ExtArgs> | null
    /**
     * Filter, which Mailing to fetch.
     */
    where?: MailingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mailings to fetch.
     */
    orderBy?: MailingOrderByWithRelationInput | MailingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mailings.
     */
    cursor?: MailingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mailings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mailings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mailings.
     */
    distinct?: MailingScalarFieldEnum | MailingScalarFieldEnum[]
  }

  /**
   * Mailing findFirstOrThrow
   */
  export type MailingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mailing
     */
    select?: MailingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mailing
     */
    omit?: MailingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailingInclude<ExtArgs> | null
    /**
     * Filter, which Mailing to fetch.
     */
    where?: MailingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mailings to fetch.
     */
    orderBy?: MailingOrderByWithRelationInput | MailingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mailings.
     */
    cursor?: MailingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mailings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mailings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mailings.
     */
    distinct?: MailingScalarFieldEnum | MailingScalarFieldEnum[]
  }

  /**
   * Mailing findMany
   */
  export type MailingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mailing
     */
    select?: MailingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mailing
     */
    omit?: MailingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailingInclude<ExtArgs> | null
    /**
     * Filter, which Mailings to fetch.
     */
    where?: MailingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mailings to fetch.
     */
    orderBy?: MailingOrderByWithRelationInput | MailingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mailings.
     */
    cursor?: MailingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mailings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mailings.
     */
    skip?: number
    distinct?: MailingScalarFieldEnum | MailingScalarFieldEnum[]
  }

  /**
   * Mailing create
   */
  export type MailingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mailing
     */
    select?: MailingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mailing
     */
    omit?: MailingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailingInclude<ExtArgs> | null
    /**
     * The data needed to create a Mailing.
     */
    data: XOR<MailingCreateInput, MailingUncheckedCreateInput>
  }

  /**
   * Mailing createMany
   */
  export type MailingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mailings.
     */
    data: MailingCreateManyInput | MailingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mailing createManyAndReturn
   */
  export type MailingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mailing
     */
    select?: MailingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mailing
     */
    omit?: MailingOmit<ExtArgs> | null
    /**
     * The data used to create many Mailings.
     */
    data: MailingCreateManyInput | MailingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mailing update
   */
  export type MailingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mailing
     */
    select?: MailingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mailing
     */
    omit?: MailingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailingInclude<ExtArgs> | null
    /**
     * The data needed to update a Mailing.
     */
    data: XOR<MailingUpdateInput, MailingUncheckedUpdateInput>
    /**
     * Choose, which Mailing to update.
     */
    where: MailingWhereUniqueInput
  }

  /**
   * Mailing updateMany
   */
  export type MailingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mailings.
     */
    data: XOR<MailingUpdateManyMutationInput, MailingUncheckedUpdateManyInput>
    /**
     * Filter which Mailings to update
     */
    where?: MailingWhereInput
    /**
     * Limit how many Mailings to update.
     */
    limit?: number
  }

  /**
   * Mailing updateManyAndReturn
   */
  export type MailingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mailing
     */
    select?: MailingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mailing
     */
    omit?: MailingOmit<ExtArgs> | null
    /**
     * The data used to update Mailings.
     */
    data: XOR<MailingUpdateManyMutationInput, MailingUncheckedUpdateManyInput>
    /**
     * Filter which Mailings to update
     */
    where?: MailingWhereInput
    /**
     * Limit how many Mailings to update.
     */
    limit?: number
  }

  /**
   * Mailing upsert
   */
  export type MailingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mailing
     */
    select?: MailingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mailing
     */
    omit?: MailingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailingInclude<ExtArgs> | null
    /**
     * The filter to search for the Mailing to update in case it exists.
     */
    where: MailingWhereUniqueInput
    /**
     * In case the Mailing found by the `where` argument doesn't exist, create a new Mailing with this data.
     */
    create: XOR<MailingCreateInput, MailingUncheckedCreateInput>
    /**
     * In case the Mailing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MailingUpdateInput, MailingUncheckedUpdateInput>
  }

  /**
   * Mailing delete
   */
  export type MailingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mailing
     */
    select?: MailingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mailing
     */
    omit?: MailingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailingInclude<ExtArgs> | null
    /**
     * Filter which Mailing to delete.
     */
    where: MailingWhereUniqueInput
  }

  /**
   * Mailing deleteMany
   */
  export type MailingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mailings to delete
     */
    where?: MailingWhereInput
    /**
     * Limit how many Mailings to delete.
     */
    limit?: number
  }

  /**
   * Mailing.recipients
   */
  export type Mailing$recipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    where?: RecipientWhereInput
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    cursor?: RecipientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }

  /**
   * Mailing without action
   */
  export type MailingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mailing
     */
    select?: MailingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mailing
     */
    omit?: MailingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailingInclude<ExtArgs> | null
  }


  /**
   * Model Recipient
   */

  export type AggregateRecipient = {
    _count: RecipientCountAggregateOutputType | null
    _avg: RecipientAvgAggregateOutputType | null
    _sum: RecipientSumAggregateOutputType | null
    _min: RecipientMinAggregateOutputType | null
    _max: RecipientMaxAggregateOutputType | null
  }

  export type RecipientAvgAggregateOutputType = {
    id: number | null
    mailingId: number | null
  }

  export type RecipientSumAggregateOutputType = {
    id: number | null
    mailingId: number | null
  }

  export type RecipientMinAggregateOutputType = {
    id: number | null
    mailingId: number | null
    email: string | null
    status: $Enums.MailingStatus | null
  }

  export type RecipientMaxAggregateOutputType = {
    id: number | null
    mailingId: number | null
    email: string | null
    status: $Enums.MailingStatus | null
  }

  export type RecipientCountAggregateOutputType = {
    id: number
    mailingId: number
    email: number
    status: number
    _all: number
  }


  export type RecipientAvgAggregateInputType = {
    id?: true
    mailingId?: true
  }

  export type RecipientSumAggregateInputType = {
    id?: true
    mailingId?: true
  }

  export type RecipientMinAggregateInputType = {
    id?: true
    mailingId?: true
    email?: true
    status?: true
  }

  export type RecipientMaxAggregateInputType = {
    id?: true
    mailingId?: true
    email?: true
    status?: true
  }

  export type RecipientCountAggregateInputType = {
    id?: true
    mailingId?: true
    email?: true
    status?: true
    _all?: true
  }

  export type RecipientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipient to aggregate.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipients
    **/
    _count?: true | RecipientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipientMaxAggregateInputType
  }

  export type GetRecipientAggregateType<T extends RecipientAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipient[P]>
      : GetScalarType<T[P], AggregateRecipient[P]>
  }




  export type RecipientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipientWhereInput
    orderBy?: RecipientOrderByWithAggregationInput | RecipientOrderByWithAggregationInput[]
    by: RecipientScalarFieldEnum[] | RecipientScalarFieldEnum
    having?: RecipientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipientCountAggregateInputType | true
    _avg?: RecipientAvgAggregateInputType
    _sum?: RecipientSumAggregateInputType
    _min?: RecipientMinAggregateInputType
    _max?: RecipientMaxAggregateInputType
  }

  export type RecipientGroupByOutputType = {
    id: number
    mailingId: number
    email: string
    status: $Enums.MailingStatus
    _count: RecipientCountAggregateOutputType | null
    _avg: RecipientAvgAggregateOutputType | null
    _sum: RecipientSumAggregateOutputType | null
    _min: RecipientMinAggregateOutputType | null
    _max: RecipientMaxAggregateOutputType | null
  }

  type GetRecipientGroupByPayload<T extends RecipientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipientGroupByOutputType[P]>
            : GetScalarType<T[P], RecipientGroupByOutputType[P]>
        }
      >
    >


  export type RecipientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mailingId?: boolean
    email?: boolean
    status?: boolean
    mailing?: boolean | MailingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipient"]>

  export type RecipientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mailingId?: boolean
    email?: boolean
    status?: boolean
    mailing?: boolean | MailingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipient"]>

  export type RecipientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mailingId?: boolean
    email?: boolean
    status?: boolean
    mailing?: boolean | MailingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipient"]>

  export type RecipientSelectScalar = {
    id?: boolean
    mailingId?: boolean
    email?: boolean
    status?: boolean
  }

  export type RecipientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mailingId" | "email" | "status", ExtArgs["result"]["recipient"]>
  export type RecipientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mailing?: boolean | MailingDefaultArgs<ExtArgs>
  }
  export type RecipientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mailing?: boolean | MailingDefaultArgs<ExtArgs>
  }
  export type RecipientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mailing?: boolean | MailingDefaultArgs<ExtArgs>
  }

  export type $RecipientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipient"
    objects: {
      mailing: Prisma.$MailingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mailingId: number
      email: string
      status: $Enums.MailingStatus
    }, ExtArgs["result"]["recipient"]>
    composites: {}
  }

  type RecipientGetPayload<S extends boolean | null | undefined | RecipientDefaultArgs> = $Result.GetResult<Prisma.$RecipientPayload, S>

  type RecipientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipientCountAggregateInputType | true
    }

  export interface RecipientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipient'], meta: { name: 'Recipient' } }
    /**
     * Find zero or one Recipient that matches the filter.
     * @param {RecipientFindUniqueArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipientFindUniqueArgs>(args: SelectSubset<T, RecipientFindUniqueArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipientFindUniqueOrThrowArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipientFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientFindFirstArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipientFindFirstArgs>(args?: SelectSubset<T, RecipientFindFirstArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientFindFirstOrThrowArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipientFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipientFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipients
     * const recipients = await prisma.recipient.findMany()
     * 
     * // Get first 10 Recipients
     * const recipients = await prisma.recipient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipientWithIdOnly = await prisma.recipient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipientFindManyArgs>(args?: SelectSubset<T, RecipientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipient.
     * @param {RecipientCreateArgs} args - Arguments to create a Recipient.
     * @example
     * // Create one Recipient
     * const Recipient = await prisma.recipient.create({
     *   data: {
     *     // ... data to create a Recipient
     *   }
     * })
     * 
     */
    create<T extends RecipientCreateArgs>(args: SelectSubset<T, RecipientCreateArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipients.
     * @param {RecipientCreateManyArgs} args - Arguments to create many Recipients.
     * @example
     * // Create many Recipients
     * const recipient = await prisma.recipient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipientCreateManyArgs>(args?: SelectSubset<T, RecipientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipients and returns the data saved in the database.
     * @param {RecipientCreateManyAndReturnArgs} args - Arguments to create many Recipients.
     * @example
     * // Create many Recipients
     * const recipient = await prisma.recipient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipients and only return the `id`
     * const recipientWithIdOnly = await prisma.recipient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipientCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipient.
     * @param {RecipientDeleteArgs} args - Arguments to delete one Recipient.
     * @example
     * // Delete one Recipient
     * const Recipient = await prisma.recipient.delete({
     *   where: {
     *     // ... filter to delete one Recipient
     *   }
     * })
     * 
     */
    delete<T extends RecipientDeleteArgs>(args: SelectSubset<T, RecipientDeleteArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipient.
     * @param {RecipientUpdateArgs} args - Arguments to update one Recipient.
     * @example
     * // Update one Recipient
     * const recipient = await prisma.recipient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipientUpdateArgs>(args: SelectSubset<T, RecipientUpdateArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipients.
     * @param {RecipientDeleteManyArgs} args - Arguments to filter Recipients to delete.
     * @example
     * // Delete a few Recipients
     * const { count } = await prisma.recipient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipientDeleteManyArgs>(args?: SelectSubset<T, RecipientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipients
     * const recipient = await prisma.recipient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipientUpdateManyArgs>(args: SelectSubset<T, RecipientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipients and returns the data updated in the database.
     * @param {RecipientUpdateManyAndReturnArgs} args - Arguments to update many Recipients.
     * @example
     * // Update many Recipients
     * const recipient = await prisma.recipient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipients and only return the `id`
     * const recipientWithIdOnly = await prisma.recipient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipientUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipient.
     * @param {RecipientUpsertArgs} args - Arguments to update or create a Recipient.
     * @example
     * // Update or create a Recipient
     * const recipient = await prisma.recipient.upsert({
     *   create: {
     *     // ... data to create a Recipient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipient we want to update
     *   }
     * })
     */
    upsert<T extends RecipientUpsertArgs>(args: SelectSubset<T, RecipientUpsertArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientCountArgs} args - Arguments to filter Recipients to count.
     * @example
     * // Count the number of Recipients
     * const count = await prisma.recipient.count({
     *   where: {
     *     // ... the filter for the Recipients we want to count
     *   }
     * })
    **/
    count<T extends RecipientCountArgs>(
      args?: Subset<T, RecipientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipientAggregateArgs>(args: Subset<T, RecipientAggregateArgs>): Prisma.PrismaPromise<GetRecipientAggregateType<T>>

    /**
     * Group by Recipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipientGroupByArgs['orderBy'] }
        : { orderBy?: RecipientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipient model
   */
  readonly fields: RecipientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mailing<T extends MailingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MailingDefaultArgs<ExtArgs>>): Prisma__MailingClient<$Result.GetResult<Prisma.$MailingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipient model
   */
  interface RecipientFieldRefs {
    readonly id: FieldRef<"Recipient", 'Int'>
    readonly mailingId: FieldRef<"Recipient", 'Int'>
    readonly email: FieldRef<"Recipient", 'String'>
    readonly status: FieldRef<"Recipient", 'MailingStatus'>
  }
    

  // Custom InputTypes
  /**
   * Recipient findUnique
   */
  export type RecipientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where: RecipientWhereUniqueInput
  }

  /**
   * Recipient findUniqueOrThrow
   */
  export type RecipientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where: RecipientWhereUniqueInput
  }

  /**
   * Recipient findFirst
   */
  export type RecipientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipients.
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipients.
     */
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }

  /**
   * Recipient findFirstOrThrow
   */
  export type RecipientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipients.
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipients.
     */
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }

  /**
   * Recipient findMany
   */
  export type RecipientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipients to fetch.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipients.
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }

  /**
   * Recipient create
   */
  export type RecipientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipient.
     */
    data: XOR<RecipientCreateInput, RecipientUncheckedCreateInput>
  }

  /**
   * Recipient createMany
   */
  export type RecipientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipients.
     */
    data: RecipientCreateManyInput | RecipientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipient createManyAndReturn
   */
  export type RecipientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * The data used to create many Recipients.
     */
    data: RecipientCreateManyInput | RecipientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipient update
   */
  export type RecipientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipient.
     */
    data: XOR<RecipientUpdateInput, RecipientUncheckedUpdateInput>
    /**
     * Choose, which Recipient to update.
     */
    where: RecipientWhereUniqueInput
  }

  /**
   * Recipient updateMany
   */
  export type RecipientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipients.
     */
    data: XOR<RecipientUpdateManyMutationInput, RecipientUncheckedUpdateManyInput>
    /**
     * Filter which Recipients to update
     */
    where?: RecipientWhereInput
    /**
     * Limit how many Recipients to update.
     */
    limit?: number
  }

  /**
   * Recipient updateManyAndReturn
   */
  export type RecipientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * The data used to update Recipients.
     */
    data: XOR<RecipientUpdateManyMutationInput, RecipientUncheckedUpdateManyInput>
    /**
     * Filter which Recipients to update
     */
    where?: RecipientWhereInput
    /**
     * Limit how many Recipients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipient upsert
   */
  export type RecipientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipient to update in case it exists.
     */
    where: RecipientWhereUniqueInput
    /**
     * In case the Recipient found by the `where` argument doesn't exist, create a new Recipient with this data.
     */
    create: XOR<RecipientCreateInput, RecipientUncheckedCreateInput>
    /**
     * In case the Recipient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipientUpdateInput, RecipientUncheckedUpdateInput>
  }

  /**
   * Recipient delete
   */
  export type RecipientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter which Recipient to delete.
     */
    where: RecipientWhereUniqueInput
  }

  /**
   * Recipient deleteMany
   */
  export type RecipientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipients to delete
     */
    where?: RecipientWhereInput
    /**
     * Limit how many Recipients to delete.
     */
    limit?: number
  }

  /**
   * Recipient without action
   */
  export type RecipientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    token: string | null
    isValid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    token: string | null
    isValid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    token: number
    isValid: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    token?: true
    isValid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenMaxAggregateInputType = {
    token?: true
    isValid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenCountAggregateInputType = {
    token?: true
    isValid?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    token: string
    isValid: boolean
    createdAt: Date
    updatedAt: Date
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token?: boolean
    isValid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token?: boolean
    isValid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token?: boolean
    isValid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    token?: boolean
    isValid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"token" | "isValid" | "createdAt" | "updatedAt", ExtArgs["result"]["token"]>

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      token: string
      isValid: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `token`
     * const tokenWithTokenOnly = await prisma.token.findMany({ select: { token: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `token`
     * const tokenWithTokenOnly = await prisma.token.createManyAndReturn({
     *   select: { token: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `token`
     * const tokenWithTokenOnly = await prisma.token.updateManyAndReturn({
     *   select: { token: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly token: FieldRef<"Token", 'String'>
    readonly isValid: FieldRef<"Token", 'Boolean'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly updatedAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    permission: 'permission',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BatchScalarFieldEnum: {
    id: 'id',
    year: 'year'
  };

  export type BatchScalarFieldEnum = (typeof BatchScalarFieldEnum)[keyof typeof BatchScalarFieldEnum]


  export const FacultyScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FacultyScalarFieldEnum = (typeof FacultyScalarFieldEnum)[keyof typeof FacultyScalarFieldEnum]


  export const ContactStudentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    facultyId: 'facultyId',
    batchId: 'batchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactStudentsScalarFieldEnum = (typeof ContactStudentsScalarFieldEnum)[keyof typeof ContactStudentsScalarFieldEnum]


  export const ContactTeachersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactTeachersScalarFieldEnum = (typeof ContactTeachersScalarFieldEnum)[keyof typeof ContactTeachersScalarFieldEnum]


  export const ContactManagementScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactManagementScalarFieldEnum = (typeof ContactManagementScalarFieldEnum)[keyof typeof ContactManagementScalarFieldEnum]


  export const MailingScalarFieldEnum: {
    id: 'id',
    replyTo: 'replyTo',
    subject: 'subject',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type MailingScalarFieldEnum = (typeof MailingScalarFieldEnum)[keyof typeof MailingScalarFieldEnum]


  export const RecipientScalarFieldEnum: {
    id: 'id',
    mailingId: 'mailingId',
    email: 'email',
    status: 'status'
  };

  export type RecipientScalarFieldEnum = (typeof RecipientScalarFieldEnum)[keyof typeof RecipientScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    token: 'token',
    isValid: 'isValid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EmployeeStatus'
   */
  export type EnumEmployeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeStatus'>
    


  /**
   * Reference to a field of type 'EmployeeStatus[]'
   */
  export type ListEnumEmployeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeStatus[]'>
    


  /**
   * Reference to a field of type 'MailingStatus'
   */
  export type EnumMailingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MailingStatus'>
    


  /**
   * Reference to a field of type 'MailingStatus[]'
   */
  export type ListEnumMailingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MailingStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    permission?: IntFilter<"User"> | number
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    permission?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    permission?: IntFilter<"User"> | number
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    permission?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    permission?: IntWithAggregatesFilter<"User"> | number
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BatchWhereInput = {
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    id?: IntFilter<"Batch"> | number
    year?: StringFilter<"Batch"> | string
    contactStudents?: ContactStudentsListRelationFilter
    contactTeachers?: ContactTeachersListRelationFilter
    contactManagement?: ContactManagementListRelationFilter
  }

  export type BatchOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    contactStudents?: ContactStudentsOrderByRelationAggregateInput
    contactTeachers?: ContactTeachersOrderByRelationAggregateInput
    contactManagement?: ContactManagementOrderByRelationAggregateInput
  }

  export type BatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    year?: string
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    contactStudents?: ContactStudentsListRelationFilter
    contactTeachers?: ContactTeachersListRelationFilter
    contactManagement?: ContactManagementListRelationFilter
  }, "id" | "year">

  export type BatchOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    _count?: BatchCountOrderByAggregateInput
    _avg?: BatchAvgOrderByAggregateInput
    _max?: BatchMaxOrderByAggregateInput
    _min?: BatchMinOrderByAggregateInput
    _sum?: BatchSumOrderByAggregateInput
  }

  export type BatchScalarWhereWithAggregatesInput = {
    AND?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    OR?: BatchScalarWhereWithAggregatesInput[]
    NOT?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Batch"> | number
    year?: StringWithAggregatesFilter<"Batch"> | string
  }

  export type FacultyWhereInput = {
    AND?: FacultyWhereInput | FacultyWhereInput[]
    OR?: FacultyWhereInput[]
    NOT?: FacultyWhereInput | FacultyWhereInput[]
    id?: IntFilter<"Faculty"> | number
    name?: StringFilter<"Faculty"> | string
    contactStudents?: ContactStudentsListRelationFilter
    contactTeachers?: ContactTeachersListRelationFilter
    contactManagement?: ContactManagementListRelationFilter
  }

  export type FacultyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contactStudents?: ContactStudentsOrderByRelationAggregateInput
    contactTeachers?: ContactTeachersOrderByRelationAggregateInput
    contactManagement?: ContactManagementOrderByRelationAggregateInput
  }

  export type FacultyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FacultyWhereInput | FacultyWhereInput[]
    OR?: FacultyWhereInput[]
    NOT?: FacultyWhereInput | FacultyWhereInput[]
    name?: StringFilter<"Faculty"> | string
    contactStudents?: ContactStudentsListRelationFilter
    contactTeachers?: ContactTeachersListRelationFilter
    contactManagement?: ContactManagementListRelationFilter
  }, "id">

  export type FacultyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FacultyCountOrderByAggregateInput
    _avg?: FacultyAvgOrderByAggregateInput
    _max?: FacultyMaxOrderByAggregateInput
    _min?: FacultyMinOrderByAggregateInput
    _sum?: FacultySumOrderByAggregateInput
  }

  export type FacultyScalarWhereWithAggregatesInput = {
    AND?: FacultyScalarWhereWithAggregatesInput | FacultyScalarWhereWithAggregatesInput[]
    OR?: FacultyScalarWhereWithAggregatesInput[]
    NOT?: FacultyScalarWhereWithAggregatesInput | FacultyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Faculty"> | number
    name?: StringWithAggregatesFilter<"Faculty"> | string
  }

  export type ContactStudentsWhereInput = {
    AND?: ContactStudentsWhereInput | ContactStudentsWhereInput[]
    OR?: ContactStudentsWhereInput[]
    NOT?: ContactStudentsWhereInput | ContactStudentsWhereInput[]
    id?: IntFilter<"ContactStudents"> | number
    name?: StringFilter<"ContactStudents"> | string
    email?: StringFilter<"ContactStudents"> | string
    phone?: StringFilter<"ContactStudents"> | string
    facultyId?: IntFilter<"ContactStudents"> | number
    batchId?: IntFilter<"ContactStudents"> | number
    createdAt?: DateTimeFilter<"ContactStudents"> | Date | string
    updatedAt?: DateTimeFilter<"ContactStudents"> | Date | string
    faculty?: XOR<FacultyScalarRelationFilter, FacultyWhereInput>
    batch?: XOR<BatchScalarRelationFilter, BatchWhereInput>
  }

  export type ContactStudentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    facultyId?: SortOrder
    batchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    faculty?: FacultyOrderByWithRelationInput
    batch?: BatchOrderByWithRelationInput
  }

  export type ContactStudentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactStudentsWhereInput | ContactStudentsWhereInput[]
    OR?: ContactStudentsWhereInput[]
    NOT?: ContactStudentsWhereInput | ContactStudentsWhereInput[]
    name?: StringFilter<"ContactStudents"> | string
    email?: StringFilter<"ContactStudents"> | string
    phone?: StringFilter<"ContactStudents"> | string
    facultyId?: IntFilter<"ContactStudents"> | number
    batchId?: IntFilter<"ContactStudents"> | number
    createdAt?: DateTimeFilter<"ContactStudents"> | Date | string
    updatedAt?: DateTimeFilter<"ContactStudents"> | Date | string
    faculty?: XOR<FacultyScalarRelationFilter, FacultyWhereInput>
    batch?: XOR<BatchScalarRelationFilter, BatchWhereInput>
  }, "id">

  export type ContactStudentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    facultyId?: SortOrder
    batchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactStudentsCountOrderByAggregateInput
    _avg?: ContactStudentsAvgOrderByAggregateInput
    _max?: ContactStudentsMaxOrderByAggregateInput
    _min?: ContactStudentsMinOrderByAggregateInput
    _sum?: ContactStudentsSumOrderByAggregateInput
  }

  export type ContactStudentsScalarWhereWithAggregatesInput = {
    AND?: ContactStudentsScalarWhereWithAggregatesInput | ContactStudentsScalarWhereWithAggregatesInput[]
    OR?: ContactStudentsScalarWhereWithAggregatesInput[]
    NOT?: ContactStudentsScalarWhereWithAggregatesInput | ContactStudentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactStudents"> | number
    name?: StringWithAggregatesFilter<"ContactStudents"> | string
    email?: StringWithAggregatesFilter<"ContactStudents"> | string
    phone?: StringWithAggregatesFilter<"ContactStudents"> | string
    facultyId?: IntWithAggregatesFilter<"ContactStudents"> | number
    batchId?: IntWithAggregatesFilter<"ContactStudents"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ContactStudents"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactStudents"> | Date | string
  }

  export type ContactTeachersWhereInput = {
    AND?: ContactTeachersWhereInput | ContactTeachersWhereInput[]
    OR?: ContactTeachersWhereInput[]
    NOT?: ContactTeachersWhereInput | ContactTeachersWhereInput[]
    id?: IntFilter<"ContactTeachers"> | number
    name?: StringFilter<"ContactTeachers"> | string
    email?: StringFilter<"ContactTeachers"> | string
    phone?: StringFilter<"ContactTeachers"> | string
    status?: EnumEmployeeStatusFilter<"ContactTeachers"> | $Enums.EmployeeStatus
    createdAt?: DateTimeFilter<"ContactTeachers"> | Date | string
    updatedAt?: DateTimeFilter<"ContactTeachers"> | Date | string
    faculties?: FacultyListRelationFilter
    batches?: BatchListRelationFilter
  }

  export type ContactTeachersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    faculties?: FacultyOrderByRelationAggregateInput
    batches?: BatchOrderByRelationAggregateInput
  }

  export type ContactTeachersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactTeachersWhereInput | ContactTeachersWhereInput[]
    OR?: ContactTeachersWhereInput[]
    NOT?: ContactTeachersWhereInput | ContactTeachersWhereInput[]
    name?: StringFilter<"ContactTeachers"> | string
    email?: StringFilter<"ContactTeachers"> | string
    phone?: StringFilter<"ContactTeachers"> | string
    status?: EnumEmployeeStatusFilter<"ContactTeachers"> | $Enums.EmployeeStatus
    createdAt?: DateTimeFilter<"ContactTeachers"> | Date | string
    updatedAt?: DateTimeFilter<"ContactTeachers"> | Date | string
    faculties?: FacultyListRelationFilter
    batches?: BatchListRelationFilter
  }, "id">

  export type ContactTeachersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactTeachersCountOrderByAggregateInput
    _avg?: ContactTeachersAvgOrderByAggregateInput
    _max?: ContactTeachersMaxOrderByAggregateInput
    _min?: ContactTeachersMinOrderByAggregateInput
    _sum?: ContactTeachersSumOrderByAggregateInput
  }

  export type ContactTeachersScalarWhereWithAggregatesInput = {
    AND?: ContactTeachersScalarWhereWithAggregatesInput | ContactTeachersScalarWhereWithAggregatesInput[]
    OR?: ContactTeachersScalarWhereWithAggregatesInput[]
    NOT?: ContactTeachersScalarWhereWithAggregatesInput | ContactTeachersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactTeachers"> | number
    name?: StringWithAggregatesFilter<"ContactTeachers"> | string
    email?: StringWithAggregatesFilter<"ContactTeachers"> | string
    phone?: StringWithAggregatesFilter<"ContactTeachers"> | string
    status?: EnumEmployeeStatusWithAggregatesFilter<"ContactTeachers"> | $Enums.EmployeeStatus
    createdAt?: DateTimeWithAggregatesFilter<"ContactTeachers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactTeachers"> | Date | string
  }

  export type ContactManagementWhereInput = {
    AND?: ContactManagementWhereInput | ContactManagementWhereInput[]
    OR?: ContactManagementWhereInput[]
    NOT?: ContactManagementWhereInput | ContactManagementWhereInput[]
    id?: IntFilter<"ContactManagement"> | number
    name?: StringFilter<"ContactManagement"> | string
    email?: StringFilter<"ContactManagement"> | string
    phone?: StringFilter<"ContactManagement"> | string
    status?: EnumEmployeeStatusFilter<"ContactManagement"> | $Enums.EmployeeStatus
    createdAt?: DateTimeFilter<"ContactManagement"> | Date | string
    updatedAt?: DateTimeFilter<"ContactManagement"> | Date | string
    faculties?: FacultyListRelationFilter
    batches?: BatchListRelationFilter
  }

  export type ContactManagementOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    faculties?: FacultyOrderByRelationAggregateInput
    batches?: BatchOrderByRelationAggregateInput
  }

  export type ContactManagementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactManagementWhereInput | ContactManagementWhereInput[]
    OR?: ContactManagementWhereInput[]
    NOT?: ContactManagementWhereInput | ContactManagementWhereInput[]
    name?: StringFilter<"ContactManagement"> | string
    email?: StringFilter<"ContactManagement"> | string
    phone?: StringFilter<"ContactManagement"> | string
    status?: EnumEmployeeStatusFilter<"ContactManagement"> | $Enums.EmployeeStatus
    createdAt?: DateTimeFilter<"ContactManagement"> | Date | string
    updatedAt?: DateTimeFilter<"ContactManagement"> | Date | string
    faculties?: FacultyListRelationFilter
    batches?: BatchListRelationFilter
  }, "id">

  export type ContactManagementOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactManagementCountOrderByAggregateInput
    _avg?: ContactManagementAvgOrderByAggregateInput
    _max?: ContactManagementMaxOrderByAggregateInput
    _min?: ContactManagementMinOrderByAggregateInput
    _sum?: ContactManagementSumOrderByAggregateInput
  }

  export type ContactManagementScalarWhereWithAggregatesInput = {
    AND?: ContactManagementScalarWhereWithAggregatesInput | ContactManagementScalarWhereWithAggregatesInput[]
    OR?: ContactManagementScalarWhereWithAggregatesInput[]
    NOT?: ContactManagementScalarWhereWithAggregatesInput | ContactManagementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactManagement"> | number
    name?: StringWithAggregatesFilter<"ContactManagement"> | string
    email?: StringWithAggregatesFilter<"ContactManagement"> | string
    phone?: StringWithAggregatesFilter<"ContactManagement"> | string
    status?: EnumEmployeeStatusWithAggregatesFilter<"ContactManagement"> | $Enums.EmployeeStatus
    createdAt?: DateTimeWithAggregatesFilter<"ContactManagement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactManagement"> | Date | string
  }

  export type MailingWhereInput = {
    AND?: MailingWhereInput | MailingWhereInput[]
    OR?: MailingWhereInput[]
    NOT?: MailingWhereInput | MailingWhereInput[]
    id?: IntFilter<"Mailing"> | number
    replyTo?: StringFilter<"Mailing"> | string
    subject?: StringFilter<"Mailing"> | string
    content?: StringFilter<"Mailing"> | string
    createdAt?: DateTimeFilter<"Mailing"> | Date | string
    recipients?: RecipientListRelationFilter
  }

  export type MailingOrderByWithRelationInput = {
    id?: SortOrder
    replyTo?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    recipients?: RecipientOrderByRelationAggregateInput
  }

  export type MailingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MailingWhereInput | MailingWhereInput[]
    OR?: MailingWhereInput[]
    NOT?: MailingWhereInput | MailingWhereInput[]
    replyTo?: StringFilter<"Mailing"> | string
    subject?: StringFilter<"Mailing"> | string
    content?: StringFilter<"Mailing"> | string
    createdAt?: DateTimeFilter<"Mailing"> | Date | string
    recipients?: RecipientListRelationFilter
  }, "id">

  export type MailingOrderByWithAggregationInput = {
    id?: SortOrder
    replyTo?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: MailingCountOrderByAggregateInput
    _avg?: MailingAvgOrderByAggregateInput
    _max?: MailingMaxOrderByAggregateInput
    _min?: MailingMinOrderByAggregateInput
    _sum?: MailingSumOrderByAggregateInput
  }

  export type MailingScalarWhereWithAggregatesInput = {
    AND?: MailingScalarWhereWithAggregatesInput | MailingScalarWhereWithAggregatesInput[]
    OR?: MailingScalarWhereWithAggregatesInput[]
    NOT?: MailingScalarWhereWithAggregatesInput | MailingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mailing"> | number
    replyTo?: StringWithAggregatesFilter<"Mailing"> | string
    subject?: StringWithAggregatesFilter<"Mailing"> | string
    content?: StringWithAggregatesFilter<"Mailing"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Mailing"> | Date | string
  }

  export type RecipientWhereInput = {
    AND?: RecipientWhereInput | RecipientWhereInput[]
    OR?: RecipientWhereInput[]
    NOT?: RecipientWhereInput | RecipientWhereInput[]
    id?: IntFilter<"Recipient"> | number
    mailingId?: IntFilter<"Recipient"> | number
    email?: StringFilter<"Recipient"> | string
    status?: EnumMailingStatusFilter<"Recipient"> | $Enums.MailingStatus
    mailing?: XOR<MailingScalarRelationFilter, MailingWhereInput>
  }

  export type RecipientOrderByWithRelationInput = {
    id?: SortOrder
    mailingId?: SortOrder
    email?: SortOrder
    status?: SortOrder
    mailing?: MailingOrderByWithRelationInput
  }

  export type RecipientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecipientWhereInput | RecipientWhereInput[]
    OR?: RecipientWhereInput[]
    NOT?: RecipientWhereInput | RecipientWhereInput[]
    mailingId?: IntFilter<"Recipient"> | number
    email?: StringFilter<"Recipient"> | string
    status?: EnumMailingStatusFilter<"Recipient"> | $Enums.MailingStatus
    mailing?: XOR<MailingScalarRelationFilter, MailingWhereInput>
  }, "id">

  export type RecipientOrderByWithAggregationInput = {
    id?: SortOrder
    mailingId?: SortOrder
    email?: SortOrder
    status?: SortOrder
    _count?: RecipientCountOrderByAggregateInput
    _avg?: RecipientAvgOrderByAggregateInput
    _max?: RecipientMaxOrderByAggregateInput
    _min?: RecipientMinOrderByAggregateInput
    _sum?: RecipientSumOrderByAggregateInput
  }

  export type RecipientScalarWhereWithAggregatesInput = {
    AND?: RecipientScalarWhereWithAggregatesInput | RecipientScalarWhereWithAggregatesInput[]
    OR?: RecipientScalarWhereWithAggregatesInput[]
    NOT?: RecipientScalarWhereWithAggregatesInput | RecipientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recipient"> | number
    mailingId?: IntWithAggregatesFilter<"Recipient"> | number
    email?: StringWithAggregatesFilter<"Recipient"> | string
    status?: EnumMailingStatusWithAggregatesFilter<"Recipient"> | $Enums.MailingStatus
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    token?: StringFilter<"Token"> | string
    isValid?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
  }

  export type TokenOrderByWithRelationInput = {
    token?: SortOrder
    isValid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    isValid?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
  }, "token">

  export type TokenOrderByWithAggregationInput = {
    token?: SortOrder
    isValid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    token?: StringWithAggregatesFilter<"Token"> | string
    isValid?: BoolWithAggregatesFilter<"Token"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    permission?: number
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    permission?: number
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permission?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permission?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    permission?: number
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permission?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permission?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchCreateInput = {
    year: string
    contactStudents?: ContactStudentsCreateNestedManyWithoutBatchInput
    contactTeachers?: ContactTeachersCreateNestedManyWithoutBatchesInput
    contactManagement?: ContactManagementCreateNestedManyWithoutBatchesInput
  }

  export type BatchUncheckedCreateInput = {
    id?: number
    year: string
    contactStudents?: ContactStudentsUncheckedCreateNestedManyWithoutBatchInput
    contactTeachers?: ContactTeachersUncheckedCreateNestedManyWithoutBatchesInput
    contactManagement?: ContactManagementUncheckedCreateNestedManyWithoutBatchesInput
  }

  export type BatchUpdateInput = {
    year?: StringFieldUpdateOperationsInput | string
    contactStudents?: ContactStudentsUpdateManyWithoutBatchNestedInput
    contactTeachers?: ContactTeachersUpdateManyWithoutBatchesNestedInput
    contactManagement?: ContactManagementUpdateManyWithoutBatchesNestedInput
  }

  export type BatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    contactStudents?: ContactStudentsUncheckedUpdateManyWithoutBatchNestedInput
    contactTeachers?: ContactTeachersUncheckedUpdateManyWithoutBatchesNestedInput
    contactManagement?: ContactManagementUncheckedUpdateManyWithoutBatchesNestedInput
  }

  export type BatchCreateManyInput = {
    id?: number
    year: string
  }

  export type BatchUpdateManyMutationInput = {
    year?: StringFieldUpdateOperationsInput | string
  }

  export type BatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyCreateInput = {
    name: string
    contactStudents?: ContactStudentsCreateNestedManyWithoutFacultyInput
    contactTeachers?: ContactTeachersCreateNestedManyWithoutFacultiesInput
    contactManagement?: ContactManagementCreateNestedManyWithoutFacultiesInput
  }

  export type FacultyUncheckedCreateInput = {
    id?: number
    name: string
    contactStudents?: ContactStudentsUncheckedCreateNestedManyWithoutFacultyInput
    contactTeachers?: ContactTeachersUncheckedCreateNestedManyWithoutFacultiesInput
    contactManagement?: ContactManagementUncheckedCreateNestedManyWithoutFacultiesInput
  }

  export type FacultyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    contactStudents?: ContactStudentsUpdateManyWithoutFacultyNestedInput
    contactTeachers?: ContactTeachersUpdateManyWithoutFacultiesNestedInput
    contactManagement?: ContactManagementUpdateManyWithoutFacultiesNestedInput
  }

  export type FacultyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contactStudents?: ContactStudentsUncheckedUpdateManyWithoutFacultyNestedInput
    contactTeachers?: ContactTeachersUncheckedUpdateManyWithoutFacultiesNestedInput
    contactManagement?: ContactManagementUncheckedUpdateManyWithoutFacultiesNestedInput
  }

  export type FacultyCreateManyInput = {
    id?: number
    name: string
  }

  export type FacultyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ContactStudentsCreateInput = {
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    faculty: FacultyCreateNestedOneWithoutContactStudentsInput
    batch: BatchCreateNestedOneWithoutContactStudentsInput
  }

  export type ContactStudentsUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    facultyId: number
    batchId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactStudentsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculty?: FacultyUpdateOneRequiredWithoutContactStudentsNestedInput
    batch?: BatchUpdateOneRequiredWithoutContactStudentsNestedInput
  }

  export type ContactStudentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    facultyId?: IntFieldUpdateOperationsInput | number
    batchId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactStudentsCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    facultyId: number
    batchId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactStudentsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactStudentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    facultyId?: IntFieldUpdateOperationsInput | number
    batchId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactTeachersCreateInput = {
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    faculties?: FacultyCreateNestedManyWithoutContactTeachersInput
    batches?: BatchCreateNestedManyWithoutContactTeachersInput
  }

  export type ContactTeachersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    faculties?: FacultyUncheckedCreateNestedManyWithoutContactTeachersInput
    batches?: BatchUncheckedCreateNestedManyWithoutContactTeachersInput
  }

  export type ContactTeachersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculties?: FacultyUpdateManyWithoutContactTeachersNestedInput
    batches?: BatchUpdateManyWithoutContactTeachersNestedInput
  }

  export type ContactTeachersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculties?: FacultyUncheckedUpdateManyWithoutContactTeachersNestedInput
    batches?: BatchUncheckedUpdateManyWithoutContactTeachersNestedInput
  }

  export type ContactTeachersCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactTeachersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactTeachersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactManagementCreateInput = {
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    faculties?: FacultyCreateNestedManyWithoutContactManagementInput
    batches?: BatchCreateNestedManyWithoutContactManagementInput
  }

  export type ContactManagementUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    faculties?: FacultyUncheckedCreateNestedManyWithoutContactManagementInput
    batches?: BatchUncheckedCreateNestedManyWithoutContactManagementInput
  }

  export type ContactManagementUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculties?: FacultyUpdateManyWithoutContactManagementNestedInput
    batches?: BatchUpdateManyWithoutContactManagementNestedInput
  }

  export type ContactManagementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculties?: FacultyUncheckedUpdateManyWithoutContactManagementNestedInput
    batches?: BatchUncheckedUpdateManyWithoutContactManagementNestedInput
  }

  export type ContactManagementCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactManagementUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactManagementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailingCreateInput = {
    replyTo: string
    subject: string
    content: string
    createdAt?: Date | string
    recipients?: RecipientCreateNestedManyWithoutMailingInput
  }

  export type MailingUncheckedCreateInput = {
    id?: number
    replyTo: string
    subject: string
    content: string
    createdAt?: Date | string
    recipients?: RecipientUncheckedCreateNestedManyWithoutMailingInput
  }

  export type MailingUpdateInput = {
    replyTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: RecipientUpdateManyWithoutMailingNestedInput
  }

  export type MailingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    replyTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: RecipientUncheckedUpdateManyWithoutMailingNestedInput
  }

  export type MailingCreateManyInput = {
    id?: number
    replyTo: string
    subject: string
    content: string
    createdAt?: Date | string
  }

  export type MailingUpdateManyMutationInput = {
    replyTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    replyTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipientCreateInput = {
    email: string
    status?: $Enums.MailingStatus
    mailing: MailingCreateNestedOneWithoutRecipientsInput
  }

  export type RecipientUncheckedCreateInput = {
    id?: number
    mailingId: number
    email: string
    status?: $Enums.MailingStatus
  }

  export type RecipientUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumMailingStatusFieldUpdateOperationsInput | $Enums.MailingStatus
    mailing?: MailingUpdateOneRequiredWithoutRecipientsNestedInput
  }

  export type RecipientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mailingId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumMailingStatusFieldUpdateOperationsInput | $Enums.MailingStatus
  }

  export type RecipientCreateManyInput = {
    id?: number
    mailingId: number
    email: string
    status?: $Enums.MailingStatus
  }

  export type RecipientUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumMailingStatusFieldUpdateOperationsInput | $Enums.MailingStatus
  }

  export type RecipientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mailingId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumMailingStatusFieldUpdateOperationsInput | $Enums.MailingStatus
  }

  export type TokenCreateInput = {
    token: string
    isValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUncheckedCreateInput = {
    token: string
    isValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyInput = {
    token: string
    isValid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    isValid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    permission?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    permission?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    permission?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    permission?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    permission?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ContactStudentsListRelationFilter = {
    every?: ContactStudentsWhereInput
    some?: ContactStudentsWhereInput
    none?: ContactStudentsWhereInput
  }

  export type ContactTeachersListRelationFilter = {
    every?: ContactTeachersWhereInput
    some?: ContactTeachersWhereInput
    none?: ContactTeachersWhereInput
  }

  export type ContactManagementListRelationFilter = {
    every?: ContactManagementWhereInput
    some?: ContactManagementWhereInput
    none?: ContactManagementWhereInput
  }

  export type ContactStudentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactTeachersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactManagementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BatchCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type BatchAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BatchMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type BatchMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type BatchSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacultyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FacultyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacultyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FacultyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FacultySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacultyScalarRelationFilter = {
    is?: FacultyWhereInput
    isNot?: FacultyWhereInput
  }

  export type BatchScalarRelationFilter = {
    is?: BatchWhereInput
    isNot?: BatchWhereInput
  }

  export type ContactStudentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    facultyId?: SortOrder
    batchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactStudentsAvgOrderByAggregateInput = {
    id?: SortOrder
    facultyId?: SortOrder
    batchId?: SortOrder
  }

  export type ContactStudentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    facultyId?: SortOrder
    batchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactStudentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    facultyId?: SortOrder
    batchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactStudentsSumOrderByAggregateInput = {
    id?: SortOrder
    facultyId?: SortOrder
    batchId?: SortOrder
  }

  export type EnumEmployeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusFilter<$PrismaModel> | $Enums.EmployeeStatus
  }

  export type FacultyListRelationFilter = {
    every?: FacultyWhereInput
    some?: FacultyWhereInput
    none?: FacultyWhereInput
  }

  export type BatchListRelationFilter = {
    every?: BatchWhereInput
    some?: BatchWhereInput
    none?: BatchWhereInput
  }

  export type FacultyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactTeachersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactTeachersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactTeachersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactTeachersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactTeachersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumEmployeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeStatusFilter<$PrismaModel>
    _max?: NestedEnumEmployeeStatusFilter<$PrismaModel>
  }

  export type ContactManagementCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactManagementAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactManagementMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactManagementMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactManagementSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecipientListRelationFilter = {
    every?: RecipientWhereInput
    some?: RecipientWhereInput
    none?: RecipientWhereInput
  }

  export type RecipientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MailingCountOrderByAggregateInput = {
    id?: SortOrder
    replyTo?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MailingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MailingMaxOrderByAggregateInput = {
    id?: SortOrder
    replyTo?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MailingMinOrderByAggregateInput = {
    id?: SortOrder
    replyTo?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MailingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumMailingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MailingStatus | EnumMailingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MailingStatus[] | ListEnumMailingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MailingStatus[] | ListEnumMailingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMailingStatusFilter<$PrismaModel> | $Enums.MailingStatus
  }

  export type MailingScalarRelationFilter = {
    is?: MailingWhereInput
    isNot?: MailingWhereInput
  }

  export type RecipientCountOrderByAggregateInput = {
    id?: SortOrder
    mailingId?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type RecipientAvgOrderByAggregateInput = {
    id?: SortOrder
    mailingId?: SortOrder
  }

  export type RecipientMaxOrderByAggregateInput = {
    id?: SortOrder
    mailingId?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type RecipientMinOrderByAggregateInput = {
    id?: SortOrder
    mailingId?: SortOrder
    email?: SortOrder
    status?: SortOrder
  }

  export type RecipientSumOrderByAggregateInput = {
    id?: SortOrder
    mailingId?: SortOrder
  }

  export type EnumMailingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MailingStatus | EnumMailingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MailingStatus[] | ListEnumMailingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MailingStatus[] | ListEnumMailingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMailingStatusWithAggregatesFilter<$PrismaModel> | $Enums.MailingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMailingStatusFilter<$PrismaModel>
    _max?: NestedEnumMailingStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TokenCountOrderByAggregateInput = {
    token?: SortOrder
    isValid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    token?: SortOrder
    isValid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    token?: SortOrder
    isValid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ContactStudentsCreateNestedManyWithoutBatchInput = {
    create?: XOR<ContactStudentsCreateWithoutBatchInput, ContactStudentsUncheckedCreateWithoutBatchInput> | ContactStudentsCreateWithoutBatchInput[] | ContactStudentsUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: ContactStudentsCreateOrConnectWithoutBatchInput | ContactStudentsCreateOrConnectWithoutBatchInput[]
    createMany?: ContactStudentsCreateManyBatchInputEnvelope
    connect?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
  }

  export type ContactTeachersCreateNestedManyWithoutBatchesInput = {
    create?: XOR<ContactTeachersCreateWithoutBatchesInput, ContactTeachersUncheckedCreateWithoutBatchesInput> | ContactTeachersCreateWithoutBatchesInput[] | ContactTeachersUncheckedCreateWithoutBatchesInput[]
    connectOrCreate?: ContactTeachersCreateOrConnectWithoutBatchesInput | ContactTeachersCreateOrConnectWithoutBatchesInput[]
    connect?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
  }

  export type ContactManagementCreateNestedManyWithoutBatchesInput = {
    create?: XOR<ContactManagementCreateWithoutBatchesInput, ContactManagementUncheckedCreateWithoutBatchesInput> | ContactManagementCreateWithoutBatchesInput[] | ContactManagementUncheckedCreateWithoutBatchesInput[]
    connectOrCreate?: ContactManagementCreateOrConnectWithoutBatchesInput | ContactManagementCreateOrConnectWithoutBatchesInput[]
    connect?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
  }

  export type ContactStudentsUncheckedCreateNestedManyWithoutBatchInput = {
    create?: XOR<ContactStudentsCreateWithoutBatchInput, ContactStudentsUncheckedCreateWithoutBatchInput> | ContactStudentsCreateWithoutBatchInput[] | ContactStudentsUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: ContactStudentsCreateOrConnectWithoutBatchInput | ContactStudentsCreateOrConnectWithoutBatchInput[]
    createMany?: ContactStudentsCreateManyBatchInputEnvelope
    connect?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
  }

  export type ContactTeachersUncheckedCreateNestedManyWithoutBatchesInput = {
    create?: XOR<ContactTeachersCreateWithoutBatchesInput, ContactTeachersUncheckedCreateWithoutBatchesInput> | ContactTeachersCreateWithoutBatchesInput[] | ContactTeachersUncheckedCreateWithoutBatchesInput[]
    connectOrCreate?: ContactTeachersCreateOrConnectWithoutBatchesInput | ContactTeachersCreateOrConnectWithoutBatchesInput[]
    connect?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
  }

  export type ContactManagementUncheckedCreateNestedManyWithoutBatchesInput = {
    create?: XOR<ContactManagementCreateWithoutBatchesInput, ContactManagementUncheckedCreateWithoutBatchesInput> | ContactManagementCreateWithoutBatchesInput[] | ContactManagementUncheckedCreateWithoutBatchesInput[]
    connectOrCreate?: ContactManagementCreateOrConnectWithoutBatchesInput | ContactManagementCreateOrConnectWithoutBatchesInput[]
    connect?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
  }

  export type ContactStudentsUpdateManyWithoutBatchNestedInput = {
    create?: XOR<ContactStudentsCreateWithoutBatchInput, ContactStudentsUncheckedCreateWithoutBatchInput> | ContactStudentsCreateWithoutBatchInput[] | ContactStudentsUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: ContactStudentsCreateOrConnectWithoutBatchInput | ContactStudentsCreateOrConnectWithoutBatchInput[]
    upsert?: ContactStudentsUpsertWithWhereUniqueWithoutBatchInput | ContactStudentsUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: ContactStudentsCreateManyBatchInputEnvelope
    set?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    disconnect?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    delete?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    connect?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    update?: ContactStudentsUpdateWithWhereUniqueWithoutBatchInput | ContactStudentsUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: ContactStudentsUpdateManyWithWhereWithoutBatchInput | ContactStudentsUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: ContactStudentsScalarWhereInput | ContactStudentsScalarWhereInput[]
  }

  export type ContactTeachersUpdateManyWithoutBatchesNestedInput = {
    create?: XOR<ContactTeachersCreateWithoutBatchesInput, ContactTeachersUncheckedCreateWithoutBatchesInput> | ContactTeachersCreateWithoutBatchesInput[] | ContactTeachersUncheckedCreateWithoutBatchesInput[]
    connectOrCreate?: ContactTeachersCreateOrConnectWithoutBatchesInput | ContactTeachersCreateOrConnectWithoutBatchesInput[]
    upsert?: ContactTeachersUpsertWithWhereUniqueWithoutBatchesInput | ContactTeachersUpsertWithWhereUniqueWithoutBatchesInput[]
    set?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    disconnect?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    delete?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    connect?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    update?: ContactTeachersUpdateWithWhereUniqueWithoutBatchesInput | ContactTeachersUpdateWithWhereUniqueWithoutBatchesInput[]
    updateMany?: ContactTeachersUpdateManyWithWhereWithoutBatchesInput | ContactTeachersUpdateManyWithWhereWithoutBatchesInput[]
    deleteMany?: ContactTeachersScalarWhereInput | ContactTeachersScalarWhereInput[]
  }

  export type ContactManagementUpdateManyWithoutBatchesNestedInput = {
    create?: XOR<ContactManagementCreateWithoutBatchesInput, ContactManagementUncheckedCreateWithoutBatchesInput> | ContactManagementCreateWithoutBatchesInput[] | ContactManagementUncheckedCreateWithoutBatchesInput[]
    connectOrCreate?: ContactManagementCreateOrConnectWithoutBatchesInput | ContactManagementCreateOrConnectWithoutBatchesInput[]
    upsert?: ContactManagementUpsertWithWhereUniqueWithoutBatchesInput | ContactManagementUpsertWithWhereUniqueWithoutBatchesInput[]
    set?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    disconnect?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    delete?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    connect?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    update?: ContactManagementUpdateWithWhereUniqueWithoutBatchesInput | ContactManagementUpdateWithWhereUniqueWithoutBatchesInput[]
    updateMany?: ContactManagementUpdateManyWithWhereWithoutBatchesInput | ContactManagementUpdateManyWithWhereWithoutBatchesInput[]
    deleteMany?: ContactManagementScalarWhereInput | ContactManagementScalarWhereInput[]
  }

  export type ContactStudentsUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: XOR<ContactStudentsCreateWithoutBatchInput, ContactStudentsUncheckedCreateWithoutBatchInput> | ContactStudentsCreateWithoutBatchInput[] | ContactStudentsUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: ContactStudentsCreateOrConnectWithoutBatchInput | ContactStudentsCreateOrConnectWithoutBatchInput[]
    upsert?: ContactStudentsUpsertWithWhereUniqueWithoutBatchInput | ContactStudentsUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: ContactStudentsCreateManyBatchInputEnvelope
    set?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    disconnect?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    delete?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    connect?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    update?: ContactStudentsUpdateWithWhereUniqueWithoutBatchInput | ContactStudentsUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: ContactStudentsUpdateManyWithWhereWithoutBatchInput | ContactStudentsUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: ContactStudentsScalarWhereInput | ContactStudentsScalarWhereInput[]
  }

  export type ContactTeachersUncheckedUpdateManyWithoutBatchesNestedInput = {
    create?: XOR<ContactTeachersCreateWithoutBatchesInput, ContactTeachersUncheckedCreateWithoutBatchesInput> | ContactTeachersCreateWithoutBatchesInput[] | ContactTeachersUncheckedCreateWithoutBatchesInput[]
    connectOrCreate?: ContactTeachersCreateOrConnectWithoutBatchesInput | ContactTeachersCreateOrConnectWithoutBatchesInput[]
    upsert?: ContactTeachersUpsertWithWhereUniqueWithoutBatchesInput | ContactTeachersUpsertWithWhereUniqueWithoutBatchesInput[]
    set?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    disconnect?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    delete?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    connect?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    update?: ContactTeachersUpdateWithWhereUniqueWithoutBatchesInput | ContactTeachersUpdateWithWhereUniqueWithoutBatchesInput[]
    updateMany?: ContactTeachersUpdateManyWithWhereWithoutBatchesInput | ContactTeachersUpdateManyWithWhereWithoutBatchesInput[]
    deleteMany?: ContactTeachersScalarWhereInput | ContactTeachersScalarWhereInput[]
  }

  export type ContactManagementUncheckedUpdateManyWithoutBatchesNestedInput = {
    create?: XOR<ContactManagementCreateWithoutBatchesInput, ContactManagementUncheckedCreateWithoutBatchesInput> | ContactManagementCreateWithoutBatchesInput[] | ContactManagementUncheckedCreateWithoutBatchesInput[]
    connectOrCreate?: ContactManagementCreateOrConnectWithoutBatchesInput | ContactManagementCreateOrConnectWithoutBatchesInput[]
    upsert?: ContactManagementUpsertWithWhereUniqueWithoutBatchesInput | ContactManagementUpsertWithWhereUniqueWithoutBatchesInput[]
    set?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    disconnect?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    delete?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    connect?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    update?: ContactManagementUpdateWithWhereUniqueWithoutBatchesInput | ContactManagementUpdateWithWhereUniqueWithoutBatchesInput[]
    updateMany?: ContactManagementUpdateManyWithWhereWithoutBatchesInput | ContactManagementUpdateManyWithWhereWithoutBatchesInput[]
    deleteMany?: ContactManagementScalarWhereInput | ContactManagementScalarWhereInput[]
  }

  export type ContactStudentsCreateNestedManyWithoutFacultyInput = {
    create?: XOR<ContactStudentsCreateWithoutFacultyInput, ContactStudentsUncheckedCreateWithoutFacultyInput> | ContactStudentsCreateWithoutFacultyInput[] | ContactStudentsUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: ContactStudentsCreateOrConnectWithoutFacultyInput | ContactStudentsCreateOrConnectWithoutFacultyInput[]
    createMany?: ContactStudentsCreateManyFacultyInputEnvelope
    connect?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
  }

  export type ContactTeachersCreateNestedManyWithoutFacultiesInput = {
    create?: XOR<ContactTeachersCreateWithoutFacultiesInput, ContactTeachersUncheckedCreateWithoutFacultiesInput> | ContactTeachersCreateWithoutFacultiesInput[] | ContactTeachersUncheckedCreateWithoutFacultiesInput[]
    connectOrCreate?: ContactTeachersCreateOrConnectWithoutFacultiesInput | ContactTeachersCreateOrConnectWithoutFacultiesInput[]
    connect?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
  }

  export type ContactManagementCreateNestedManyWithoutFacultiesInput = {
    create?: XOR<ContactManagementCreateWithoutFacultiesInput, ContactManagementUncheckedCreateWithoutFacultiesInput> | ContactManagementCreateWithoutFacultiesInput[] | ContactManagementUncheckedCreateWithoutFacultiesInput[]
    connectOrCreate?: ContactManagementCreateOrConnectWithoutFacultiesInput | ContactManagementCreateOrConnectWithoutFacultiesInput[]
    connect?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
  }

  export type ContactStudentsUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<ContactStudentsCreateWithoutFacultyInput, ContactStudentsUncheckedCreateWithoutFacultyInput> | ContactStudentsCreateWithoutFacultyInput[] | ContactStudentsUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: ContactStudentsCreateOrConnectWithoutFacultyInput | ContactStudentsCreateOrConnectWithoutFacultyInput[]
    createMany?: ContactStudentsCreateManyFacultyInputEnvelope
    connect?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
  }

  export type ContactTeachersUncheckedCreateNestedManyWithoutFacultiesInput = {
    create?: XOR<ContactTeachersCreateWithoutFacultiesInput, ContactTeachersUncheckedCreateWithoutFacultiesInput> | ContactTeachersCreateWithoutFacultiesInput[] | ContactTeachersUncheckedCreateWithoutFacultiesInput[]
    connectOrCreate?: ContactTeachersCreateOrConnectWithoutFacultiesInput | ContactTeachersCreateOrConnectWithoutFacultiesInput[]
    connect?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
  }

  export type ContactManagementUncheckedCreateNestedManyWithoutFacultiesInput = {
    create?: XOR<ContactManagementCreateWithoutFacultiesInput, ContactManagementUncheckedCreateWithoutFacultiesInput> | ContactManagementCreateWithoutFacultiesInput[] | ContactManagementUncheckedCreateWithoutFacultiesInput[]
    connectOrCreate?: ContactManagementCreateOrConnectWithoutFacultiesInput | ContactManagementCreateOrConnectWithoutFacultiesInput[]
    connect?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
  }

  export type ContactStudentsUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<ContactStudentsCreateWithoutFacultyInput, ContactStudentsUncheckedCreateWithoutFacultyInput> | ContactStudentsCreateWithoutFacultyInput[] | ContactStudentsUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: ContactStudentsCreateOrConnectWithoutFacultyInput | ContactStudentsCreateOrConnectWithoutFacultyInput[]
    upsert?: ContactStudentsUpsertWithWhereUniqueWithoutFacultyInput | ContactStudentsUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: ContactStudentsCreateManyFacultyInputEnvelope
    set?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    disconnect?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    delete?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    connect?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    update?: ContactStudentsUpdateWithWhereUniqueWithoutFacultyInput | ContactStudentsUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: ContactStudentsUpdateManyWithWhereWithoutFacultyInput | ContactStudentsUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: ContactStudentsScalarWhereInput | ContactStudentsScalarWhereInput[]
  }

  export type ContactTeachersUpdateManyWithoutFacultiesNestedInput = {
    create?: XOR<ContactTeachersCreateWithoutFacultiesInput, ContactTeachersUncheckedCreateWithoutFacultiesInput> | ContactTeachersCreateWithoutFacultiesInput[] | ContactTeachersUncheckedCreateWithoutFacultiesInput[]
    connectOrCreate?: ContactTeachersCreateOrConnectWithoutFacultiesInput | ContactTeachersCreateOrConnectWithoutFacultiesInput[]
    upsert?: ContactTeachersUpsertWithWhereUniqueWithoutFacultiesInput | ContactTeachersUpsertWithWhereUniqueWithoutFacultiesInput[]
    set?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    disconnect?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    delete?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    connect?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    update?: ContactTeachersUpdateWithWhereUniqueWithoutFacultiesInput | ContactTeachersUpdateWithWhereUniqueWithoutFacultiesInput[]
    updateMany?: ContactTeachersUpdateManyWithWhereWithoutFacultiesInput | ContactTeachersUpdateManyWithWhereWithoutFacultiesInput[]
    deleteMany?: ContactTeachersScalarWhereInput | ContactTeachersScalarWhereInput[]
  }

  export type ContactManagementUpdateManyWithoutFacultiesNestedInput = {
    create?: XOR<ContactManagementCreateWithoutFacultiesInput, ContactManagementUncheckedCreateWithoutFacultiesInput> | ContactManagementCreateWithoutFacultiesInput[] | ContactManagementUncheckedCreateWithoutFacultiesInput[]
    connectOrCreate?: ContactManagementCreateOrConnectWithoutFacultiesInput | ContactManagementCreateOrConnectWithoutFacultiesInput[]
    upsert?: ContactManagementUpsertWithWhereUniqueWithoutFacultiesInput | ContactManagementUpsertWithWhereUniqueWithoutFacultiesInput[]
    set?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    disconnect?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    delete?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    connect?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    update?: ContactManagementUpdateWithWhereUniqueWithoutFacultiesInput | ContactManagementUpdateWithWhereUniqueWithoutFacultiesInput[]
    updateMany?: ContactManagementUpdateManyWithWhereWithoutFacultiesInput | ContactManagementUpdateManyWithWhereWithoutFacultiesInput[]
    deleteMany?: ContactManagementScalarWhereInput | ContactManagementScalarWhereInput[]
  }

  export type ContactStudentsUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<ContactStudentsCreateWithoutFacultyInput, ContactStudentsUncheckedCreateWithoutFacultyInput> | ContactStudentsCreateWithoutFacultyInput[] | ContactStudentsUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: ContactStudentsCreateOrConnectWithoutFacultyInput | ContactStudentsCreateOrConnectWithoutFacultyInput[]
    upsert?: ContactStudentsUpsertWithWhereUniqueWithoutFacultyInput | ContactStudentsUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: ContactStudentsCreateManyFacultyInputEnvelope
    set?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    disconnect?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    delete?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    connect?: ContactStudentsWhereUniqueInput | ContactStudentsWhereUniqueInput[]
    update?: ContactStudentsUpdateWithWhereUniqueWithoutFacultyInput | ContactStudentsUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: ContactStudentsUpdateManyWithWhereWithoutFacultyInput | ContactStudentsUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: ContactStudentsScalarWhereInput | ContactStudentsScalarWhereInput[]
  }

  export type ContactTeachersUncheckedUpdateManyWithoutFacultiesNestedInput = {
    create?: XOR<ContactTeachersCreateWithoutFacultiesInput, ContactTeachersUncheckedCreateWithoutFacultiesInput> | ContactTeachersCreateWithoutFacultiesInput[] | ContactTeachersUncheckedCreateWithoutFacultiesInput[]
    connectOrCreate?: ContactTeachersCreateOrConnectWithoutFacultiesInput | ContactTeachersCreateOrConnectWithoutFacultiesInput[]
    upsert?: ContactTeachersUpsertWithWhereUniqueWithoutFacultiesInput | ContactTeachersUpsertWithWhereUniqueWithoutFacultiesInput[]
    set?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    disconnect?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    delete?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    connect?: ContactTeachersWhereUniqueInput | ContactTeachersWhereUniqueInput[]
    update?: ContactTeachersUpdateWithWhereUniqueWithoutFacultiesInput | ContactTeachersUpdateWithWhereUniqueWithoutFacultiesInput[]
    updateMany?: ContactTeachersUpdateManyWithWhereWithoutFacultiesInput | ContactTeachersUpdateManyWithWhereWithoutFacultiesInput[]
    deleteMany?: ContactTeachersScalarWhereInput | ContactTeachersScalarWhereInput[]
  }

  export type ContactManagementUncheckedUpdateManyWithoutFacultiesNestedInput = {
    create?: XOR<ContactManagementCreateWithoutFacultiesInput, ContactManagementUncheckedCreateWithoutFacultiesInput> | ContactManagementCreateWithoutFacultiesInput[] | ContactManagementUncheckedCreateWithoutFacultiesInput[]
    connectOrCreate?: ContactManagementCreateOrConnectWithoutFacultiesInput | ContactManagementCreateOrConnectWithoutFacultiesInput[]
    upsert?: ContactManagementUpsertWithWhereUniqueWithoutFacultiesInput | ContactManagementUpsertWithWhereUniqueWithoutFacultiesInput[]
    set?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    disconnect?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    delete?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    connect?: ContactManagementWhereUniqueInput | ContactManagementWhereUniqueInput[]
    update?: ContactManagementUpdateWithWhereUniqueWithoutFacultiesInput | ContactManagementUpdateWithWhereUniqueWithoutFacultiesInput[]
    updateMany?: ContactManagementUpdateManyWithWhereWithoutFacultiesInput | ContactManagementUpdateManyWithWhereWithoutFacultiesInput[]
    deleteMany?: ContactManagementScalarWhereInput | ContactManagementScalarWhereInput[]
  }

  export type FacultyCreateNestedOneWithoutContactStudentsInput = {
    create?: XOR<FacultyCreateWithoutContactStudentsInput, FacultyUncheckedCreateWithoutContactStudentsInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutContactStudentsInput
    connect?: FacultyWhereUniqueInput
  }

  export type BatchCreateNestedOneWithoutContactStudentsInput = {
    create?: XOR<BatchCreateWithoutContactStudentsInput, BatchUncheckedCreateWithoutContactStudentsInput>
    connectOrCreate?: BatchCreateOrConnectWithoutContactStudentsInput
    connect?: BatchWhereUniqueInput
  }

  export type FacultyUpdateOneRequiredWithoutContactStudentsNestedInput = {
    create?: XOR<FacultyCreateWithoutContactStudentsInput, FacultyUncheckedCreateWithoutContactStudentsInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutContactStudentsInput
    upsert?: FacultyUpsertWithoutContactStudentsInput
    connect?: FacultyWhereUniqueInput
    update?: XOR<XOR<FacultyUpdateToOneWithWhereWithoutContactStudentsInput, FacultyUpdateWithoutContactStudentsInput>, FacultyUncheckedUpdateWithoutContactStudentsInput>
  }

  export type BatchUpdateOneRequiredWithoutContactStudentsNestedInput = {
    create?: XOR<BatchCreateWithoutContactStudentsInput, BatchUncheckedCreateWithoutContactStudentsInput>
    connectOrCreate?: BatchCreateOrConnectWithoutContactStudentsInput
    upsert?: BatchUpsertWithoutContactStudentsInput
    connect?: BatchWhereUniqueInput
    update?: XOR<XOR<BatchUpdateToOneWithWhereWithoutContactStudentsInput, BatchUpdateWithoutContactStudentsInput>, BatchUncheckedUpdateWithoutContactStudentsInput>
  }

  export type FacultyCreateNestedManyWithoutContactTeachersInput = {
    create?: XOR<FacultyCreateWithoutContactTeachersInput, FacultyUncheckedCreateWithoutContactTeachersInput> | FacultyCreateWithoutContactTeachersInput[] | FacultyUncheckedCreateWithoutContactTeachersInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutContactTeachersInput | FacultyCreateOrConnectWithoutContactTeachersInput[]
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
  }

  export type BatchCreateNestedManyWithoutContactTeachersInput = {
    create?: XOR<BatchCreateWithoutContactTeachersInput, BatchUncheckedCreateWithoutContactTeachersInput> | BatchCreateWithoutContactTeachersInput[] | BatchUncheckedCreateWithoutContactTeachersInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutContactTeachersInput | BatchCreateOrConnectWithoutContactTeachersInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type FacultyUncheckedCreateNestedManyWithoutContactTeachersInput = {
    create?: XOR<FacultyCreateWithoutContactTeachersInput, FacultyUncheckedCreateWithoutContactTeachersInput> | FacultyCreateWithoutContactTeachersInput[] | FacultyUncheckedCreateWithoutContactTeachersInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutContactTeachersInput | FacultyCreateOrConnectWithoutContactTeachersInput[]
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
  }

  export type BatchUncheckedCreateNestedManyWithoutContactTeachersInput = {
    create?: XOR<BatchCreateWithoutContactTeachersInput, BatchUncheckedCreateWithoutContactTeachersInput> | BatchCreateWithoutContactTeachersInput[] | BatchUncheckedCreateWithoutContactTeachersInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutContactTeachersInput | BatchCreateOrConnectWithoutContactTeachersInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type EnumEmployeeStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmployeeStatus
  }

  export type FacultyUpdateManyWithoutContactTeachersNestedInput = {
    create?: XOR<FacultyCreateWithoutContactTeachersInput, FacultyUncheckedCreateWithoutContactTeachersInput> | FacultyCreateWithoutContactTeachersInput[] | FacultyUncheckedCreateWithoutContactTeachersInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutContactTeachersInput | FacultyCreateOrConnectWithoutContactTeachersInput[]
    upsert?: FacultyUpsertWithWhereUniqueWithoutContactTeachersInput | FacultyUpsertWithWhereUniqueWithoutContactTeachersInput[]
    set?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    disconnect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    delete?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    update?: FacultyUpdateWithWhereUniqueWithoutContactTeachersInput | FacultyUpdateWithWhereUniqueWithoutContactTeachersInput[]
    updateMany?: FacultyUpdateManyWithWhereWithoutContactTeachersInput | FacultyUpdateManyWithWhereWithoutContactTeachersInput[]
    deleteMany?: FacultyScalarWhereInput | FacultyScalarWhereInput[]
  }

  export type BatchUpdateManyWithoutContactTeachersNestedInput = {
    create?: XOR<BatchCreateWithoutContactTeachersInput, BatchUncheckedCreateWithoutContactTeachersInput> | BatchCreateWithoutContactTeachersInput[] | BatchUncheckedCreateWithoutContactTeachersInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutContactTeachersInput | BatchCreateOrConnectWithoutContactTeachersInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutContactTeachersInput | BatchUpsertWithWhereUniqueWithoutContactTeachersInput[]
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutContactTeachersInput | BatchUpdateWithWhereUniqueWithoutContactTeachersInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutContactTeachersInput | BatchUpdateManyWithWhereWithoutContactTeachersInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type FacultyUncheckedUpdateManyWithoutContactTeachersNestedInput = {
    create?: XOR<FacultyCreateWithoutContactTeachersInput, FacultyUncheckedCreateWithoutContactTeachersInput> | FacultyCreateWithoutContactTeachersInput[] | FacultyUncheckedCreateWithoutContactTeachersInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutContactTeachersInput | FacultyCreateOrConnectWithoutContactTeachersInput[]
    upsert?: FacultyUpsertWithWhereUniqueWithoutContactTeachersInput | FacultyUpsertWithWhereUniqueWithoutContactTeachersInput[]
    set?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    disconnect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    delete?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    update?: FacultyUpdateWithWhereUniqueWithoutContactTeachersInput | FacultyUpdateWithWhereUniqueWithoutContactTeachersInput[]
    updateMany?: FacultyUpdateManyWithWhereWithoutContactTeachersInput | FacultyUpdateManyWithWhereWithoutContactTeachersInput[]
    deleteMany?: FacultyScalarWhereInput | FacultyScalarWhereInput[]
  }

  export type BatchUncheckedUpdateManyWithoutContactTeachersNestedInput = {
    create?: XOR<BatchCreateWithoutContactTeachersInput, BatchUncheckedCreateWithoutContactTeachersInput> | BatchCreateWithoutContactTeachersInput[] | BatchUncheckedCreateWithoutContactTeachersInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutContactTeachersInput | BatchCreateOrConnectWithoutContactTeachersInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutContactTeachersInput | BatchUpsertWithWhereUniqueWithoutContactTeachersInput[]
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutContactTeachersInput | BatchUpdateWithWhereUniqueWithoutContactTeachersInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutContactTeachersInput | BatchUpdateManyWithWhereWithoutContactTeachersInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type FacultyCreateNestedManyWithoutContactManagementInput = {
    create?: XOR<FacultyCreateWithoutContactManagementInput, FacultyUncheckedCreateWithoutContactManagementInput> | FacultyCreateWithoutContactManagementInput[] | FacultyUncheckedCreateWithoutContactManagementInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutContactManagementInput | FacultyCreateOrConnectWithoutContactManagementInput[]
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
  }

  export type BatchCreateNestedManyWithoutContactManagementInput = {
    create?: XOR<BatchCreateWithoutContactManagementInput, BatchUncheckedCreateWithoutContactManagementInput> | BatchCreateWithoutContactManagementInput[] | BatchUncheckedCreateWithoutContactManagementInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutContactManagementInput | BatchCreateOrConnectWithoutContactManagementInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type FacultyUncheckedCreateNestedManyWithoutContactManagementInput = {
    create?: XOR<FacultyCreateWithoutContactManagementInput, FacultyUncheckedCreateWithoutContactManagementInput> | FacultyCreateWithoutContactManagementInput[] | FacultyUncheckedCreateWithoutContactManagementInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutContactManagementInput | FacultyCreateOrConnectWithoutContactManagementInput[]
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
  }

  export type BatchUncheckedCreateNestedManyWithoutContactManagementInput = {
    create?: XOR<BatchCreateWithoutContactManagementInput, BatchUncheckedCreateWithoutContactManagementInput> | BatchCreateWithoutContactManagementInput[] | BatchUncheckedCreateWithoutContactManagementInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutContactManagementInput | BatchCreateOrConnectWithoutContactManagementInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type FacultyUpdateManyWithoutContactManagementNestedInput = {
    create?: XOR<FacultyCreateWithoutContactManagementInput, FacultyUncheckedCreateWithoutContactManagementInput> | FacultyCreateWithoutContactManagementInput[] | FacultyUncheckedCreateWithoutContactManagementInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutContactManagementInput | FacultyCreateOrConnectWithoutContactManagementInput[]
    upsert?: FacultyUpsertWithWhereUniqueWithoutContactManagementInput | FacultyUpsertWithWhereUniqueWithoutContactManagementInput[]
    set?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    disconnect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    delete?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    update?: FacultyUpdateWithWhereUniqueWithoutContactManagementInput | FacultyUpdateWithWhereUniqueWithoutContactManagementInput[]
    updateMany?: FacultyUpdateManyWithWhereWithoutContactManagementInput | FacultyUpdateManyWithWhereWithoutContactManagementInput[]
    deleteMany?: FacultyScalarWhereInput | FacultyScalarWhereInput[]
  }

  export type BatchUpdateManyWithoutContactManagementNestedInput = {
    create?: XOR<BatchCreateWithoutContactManagementInput, BatchUncheckedCreateWithoutContactManagementInput> | BatchCreateWithoutContactManagementInput[] | BatchUncheckedCreateWithoutContactManagementInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutContactManagementInput | BatchCreateOrConnectWithoutContactManagementInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutContactManagementInput | BatchUpsertWithWhereUniqueWithoutContactManagementInput[]
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutContactManagementInput | BatchUpdateWithWhereUniqueWithoutContactManagementInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutContactManagementInput | BatchUpdateManyWithWhereWithoutContactManagementInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type FacultyUncheckedUpdateManyWithoutContactManagementNestedInput = {
    create?: XOR<FacultyCreateWithoutContactManagementInput, FacultyUncheckedCreateWithoutContactManagementInput> | FacultyCreateWithoutContactManagementInput[] | FacultyUncheckedCreateWithoutContactManagementInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutContactManagementInput | FacultyCreateOrConnectWithoutContactManagementInput[]
    upsert?: FacultyUpsertWithWhereUniqueWithoutContactManagementInput | FacultyUpsertWithWhereUniqueWithoutContactManagementInput[]
    set?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    disconnect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    delete?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    update?: FacultyUpdateWithWhereUniqueWithoutContactManagementInput | FacultyUpdateWithWhereUniqueWithoutContactManagementInput[]
    updateMany?: FacultyUpdateManyWithWhereWithoutContactManagementInput | FacultyUpdateManyWithWhereWithoutContactManagementInput[]
    deleteMany?: FacultyScalarWhereInput | FacultyScalarWhereInput[]
  }

  export type BatchUncheckedUpdateManyWithoutContactManagementNestedInput = {
    create?: XOR<BatchCreateWithoutContactManagementInput, BatchUncheckedCreateWithoutContactManagementInput> | BatchCreateWithoutContactManagementInput[] | BatchUncheckedCreateWithoutContactManagementInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutContactManagementInput | BatchCreateOrConnectWithoutContactManagementInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutContactManagementInput | BatchUpsertWithWhereUniqueWithoutContactManagementInput[]
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutContactManagementInput | BatchUpdateWithWhereUniqueWithoutContactManagementInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutContactManagementInput | BatchUpdateManyWithWhereWithoutContactManagementInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type RecipientCreateNestedManyWithoutMailingInput = {
    create?: XOR<RecipientCreateWithoutMailingInput, RecipientUncheckedCreateWithoutMailingInput> | RecipientCreateWithoutMailingInput[] | RecipientUncheckedCreateWithoutMailingInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutMailingInput | RecipientCreateOrConnectWithoutMailingInput[]
    createMany?: RecipientCreateManyMailingInputEnvelope
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
  }

  export type RecipientUncheckedCreateNestedManyWithoutMailingInput = {
    create?: XOR<RecipientCreateWithoutMailingInput, RecipientUncheckedCreateWithoutMailingInput> | RecipientCreateWithoutMailingInput[] | RecipientUncheckedCreateWithoutMailingInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutMailingInput | RecipientCreateOrConnectWithoutMailingInput[]
    createMany?: RecipientCreateManyMailingInputEnvelope
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
  }

  export type RecipientUpdateManyWithoutMailingNestedInput = {
    create?: XOR<RecipientCreateWithoutMailingInput, RecipientUncheckedCreateWithoutMailingInput> | RecipientCreateWithoutMailingInput[] | RecipientUncheckedCreateWithoutMailingInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutMailingInput | RecipientCreateOrConnectWithoutMailingInput[]
    upsert?: RecipientUpsertWithWhereUniqueWithoutMailingInput | RecipientUpsertWithWhereUniqueWithoutMailingInput[]
    createMany?: RecipientCreateManyMailingInputEnvelope
    set?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    disconnect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    delete?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    update?: RecipientUpdateWithWhereUniqueWithoutMailingInput | RecipientUpdateWithWhereUniqueWithoutMailingInput[]
    updateMany?: RecipientUpdateManyWithWhereWithoutMailingInput | RecipientUpdateManyWithWhereWithoutMailingInput[]
    deleteMany?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
  }

  export type RecipientUncheckedUpdateManyWithoutMailingNestedInput = {
    create?: XOR<RecipientCreateWithoutMailingInput, RecipientUncheckedCreateWithoutMailingInput> | RecipientCreateWithoutMailingInput[] | RecipientUncheckedCreateWithoutMailingInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutMailingInput | RecipientCreateOrConnectWithoutMailingInput[]
    upsert?: RecipientUpsertWithWhereUniqueWithoutMailingInput | RecipientUpsertWithWhereUniqueWithoutMailingInput[]
    createMany?: RecipientCreateManyMailingInputEnvelope
    set?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    disconnect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    delete?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    update?: RecipientUpdateWithWhereUniqueWithoutMailingInput | RecipientUpdateWithWhereUniqueWithoutMailingInput[]
    updateMany?: RecipientUpdateManyWithWhereWithoutMailingInput | RecipientUpdateManyWithWhereWithoutMailingInput[]
    deleteMany?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
  }

  export type MailingCreateNestedOneWithoutRecipientsInput = {
    create?: XOR<MailingCreateWithoutRecipientsInput, MailingUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: MailingCreateOrConnectWithoutRecipientsInput
    connect?: MailingWhereUniqueInput
  }

  export type EnumMailingStatusFieldUpdateOperationsInput = {
    set?: $Enums.MailingStatus
  }

  export type MailingUpdateOneRequiredWithoutRecipientsNestedInput = {
    create?: XOR<MailingCreateWithoutRecipientsInput, MailingUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: MailingCreateOrConnectWithoutRecipientsInput
    upsert?: MailingUpsertWithoutRecipientsInput
    connect?: MailingWhereUniqueInput
    update?: XOR<XOR<MailingUpdateToOneWithWhereWithoutRecipientsInput, MailingUpdateWithoutRecipientsInput>, MailingUncheckedUpdateWithoutRecipientsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEmployeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusFilter<$PrismaModel> | $Enums.EmployeeStatus
  }

  export type NestedEnumEmployeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | EnumEmployeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeStatus[] | ListEnumEmployeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeStatusFilter<$PrismaModel>
    _max?: NestedEnumEmployeeStatusFilter<$PrismaModel>
  }

  export type NestedEnumMailingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MailingStatus | EnumMailingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MailingStatus[] | ListEnumMailingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MailingStatus[] | ListEnumMailingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMailingStatusFilter<$PrismaModel> | $Enums.MailingStatus
  }

  export type NestedEnumMailingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MailingStatus | EnumMailingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MailingStatus[] | ListEnumMailingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MailingStatus[] | ListEnumMailingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMailingStatusWithAggregatesFilter<$PrismaModel> | $Enums.MailingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMailingStatusFilter<$PrismaModel>
    _max?: NestedEnumMailingStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ContactStudentsCreateWithoutBatchInput = {
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    faculty: FacultyCreateNestedOneWithoutContactStudentsInput
  }

  export type ContactStudentsUncheckedCreateWithoutBatchInput = {
    id?: number
    name: string
    email: string
    phone: string
    facultyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactStudentsCreateOrConnectWithoutBatchInput = {
    where: ContactStudentsWhereUniqueInput
    create: XOR<ContactStudentsCreateWithoutBatchInput, ContactStudentsUncheckedCreateWithoutBatchInput>
  }

  export type ContactStudentsCreateManyBatchInputEnvelope = {
    data: ContactStudentsCreateManyBatchInput | ContactStudentsCreateManyBatchInput[]
    skipDuplicates?: boolean
  }

  export type ContactTeachersCreateWithoutBatchesInput = {
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    faculties?: FacultyCreateNestedManyWithoutContactTeachersInput
  }

  export type ContactTeachersUncheckedCreateWithoutBatchesInput = {
    id?: number
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    faculties?: FacultyUncheckedCreateNestedManyWithoutContactTeachersInput
  }

  export type ContactTeachersCreateOrConnectWithoutBatchesInput = {
    where: ContactTeachersWhereUniqueInput
    create: XOR<ContactTeachersCreateWithoutBatchesInput, ContactTeachersUncheckedCreateWithoutBatchesInput>
  }

  export type ContactManagementCreateWithoutBatchesInput = {
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    faculties?: FacultyCreateNestedManyWithoutContactManagementInput
  }

  export type ContactManagementUncheckedCreateWithoutBatchesInput = {
    id?: number
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    faculties?: FacultyUncheckedCreateNestedManyWithoutContactManagementInput
  }

  export type ContactManagementCreateOrConnectWithoutBatchesInput = {
    where: ContactManagementWhereUniqueInput
    create: XOR<ContactManagementCreateWithoutBatchesInput, ContactManagementUncheckedCreateWithoutBatchesInput>
  }

  export type ContactStudentsUpsertWithWhereUniqueWithoutBatchInput = {
    where: ContactStudentsWhereUniqueInput
    update: XOR<ContactStudentsUpdateWithoutBatchInput, ContactStudentsUncheckedUpdateWithoutBatchInput>
    create: XOR<ContactStudentsCreateWithoutBatchInput, ContactStudentsUncheckedCreateWithoutBatchInput>
  }

  export type ContactStudentsUpdateWithWhereUniqueWithoutBatchInput = {
    where: ContactStudentsWhereUniqueInput
    data: XOR<ContactStudentsUpdateWithoutBatchInput, ContactStudentsUncheckedUpdateWithoutBatchInput>
  }

  export type ContactStudentsUpdateManyWithWhereWithoutBatchInput = {
    where: ContactStudentsScalarWhereInput
    data: XOR<ContactStudentsUpdateManyMutationInput, ContactStudentsUncheckedUpdateManyWithoutBatchInput>
  }

  export type ContactStudentsScalarWhereInput = {
    AND?: ContactStudentsScalarWhereInput | ContactStudentsScalarWhereInput[]
    OR?: ContactStudentsScalarWhereInput[]
    NOT?: ContactStudentsScalarWhereInput | ContactStudentsScalarWhereInput[]
    id?: IntFilter<"ContactStudents"> | number
    name?: StringFilter<"ContactStudents"> | string
    email?: StringFilter<"ContactStudents"> | string
    phone?: StringFilter<"ContactStudents"> | string
    facultyId?: IntFilter<"ContactStudents"> | number
    batchId?: IntFilter<"ContactStudents"> | number
    createdAt?: DateTimeFilter<"ContactStudents"> | Date | string
    updatedAt?: DateTimeFilter<"ContactStudents"> | Date | string
  }

  export type ContactTeachersUpsertWithWhereUniqueWithoutBatchesInput = {
    where: ContactTeachersWhereUniqueInput
    update: XOR<ContactTeachersUpdateWithoutBatchesInput, ContactTeachersUncheckedUpdateWithoutBatchesInput>
    create: XOR<ContactTeachersCreateWithoutBatchesInput, ContactTeachersUncheckedCreateWithoutBatchesInput>
  }

  export type ContactTeachersUpdateWithWhereUniqueWithoutBatchesInput = {
    where: ContactTeachersWhereUniqueInput
    data: XOR<ContactTeachersUpdateWithoutBatchesInput, ContactTeachersUncheckedUpdateWithoutBatchesInput>
  }

  export type ContactTeachersUpdateManyWithWhereWithoutBatchesInput = {
    where: ContactTeachersScalarWhereInput
    data: XOR<ContactTeachersUpdateManyMutationInput, ContactTeachersUncheckedUpdateManyWithoutBatchesInput>
  }

  export type ContactTeachersScalarWhereInput = {
    AND?: ContactTeachersScalarWhereInput | ContactTeachersScalarWhereInput[]
    OR?: ContactTeachersScalarWhereInput[]
    NOT?: ContactTeachersScalarWhereInput | ContactTeachersScalarWhereInput[]
    id?: IntFilter<"ContactTeachers"> | number
    name?: StringFilter<"ContactTeachers"> | string
    email?: StringFilter<"ContactTeachers"> | string
    phone?: StringFilter<"ContactTeachers"> | string
    status?: EnumEmployeeStatusFilter<"ContactTeachers"> | $Enums.EmployeeStatus
    createdAt?: DateTimeFilter<"ContactTeachers"> | Date | string
    updatedAt?: DateTimeFilter<"ContactTeachers"> | Date | string
  }

  export type ContactManagementUpsertWithWhereUniqueWithoutBatchesInput = {
    where: ContactManagementWhereUniqueInput
    update: XOR<ContactManagementUpdateWithoutBatchesInput, ContactManagementUncheckedUpdateWithoutBatchesInput>
    create: XOR<ContactManagementCreateWithoutBatchesInput, ContactManagementUncheckedCreateWithoutBatchesInput>
  }

  export type ContactManagementUpdateWithWhereUniqueWithoutBatchesInput = {
    where: ContactManagementWhereUniqueInput
    data: XOR<ContactManagementUpdateWithoutBatchesInput, ContactManagementUncheckedUpdateWithoutBatchesInput>
  }

  export type ContactManagementUpdateManyWithWhereWithoutBatchesInput = {
    where: ContactManagementScalarWhereInput
    data: XOR<ContactManagementUpdateManyMutationInput, ContactManagementUncheckedUpdateManyWithoutBatchesInput>
  }

  export type ContactManagementScalarWhereInput = {
    AND?: ContactManagementScalarWhereInput | ContactManagementScalarWhereInput[]
    OR?: ContactManagementScalarWhereInput[]
    NOT?: ContactManagementScalarWhereInput | ContactManagementScalarWhereInput[]
    id?: IntFilter<"ContactManagement"> | number
    name?: StringFilter<"ContactManagement"> | string
    email?: StringFilter<"ContactManagement"> | string
    phone?: StringFilter<"ContactManagement"> | string
    status?: EnumEmployeeStatusFilter<"ContactManagement"> | $Enums.EmployeeStatus
    createdAt?: DateTimeFilter<"ContactManagement"> | Date | string
    updatedAt?: DateTimeFilter<"ContactManagement"> | Date | string
  }

  export type ContactStudentsCreateWithoutFacultyInput = {
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    batch: BatchCreateNestedOneWithoutContactStudentsInput
  }

  export type ContactStudentsUncheckedCreateWithoutFacultyInput = {
    id?: number
    name: string
    email: string
    phone: string
    batchId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactStudentsCreateOrConnectWithoutFacultyInput = {
    where: ContactStudentsWhereUniqueInput
    create: XOR<ContactStudentsCreateWithoutFacultyInput, ContactStudentsUncheckedCreateWithoutFacultyInput>
  }

  export type ContactStudentsCreateManyFacultyInputEnvelope = {
    data: ContactStudentsCreateManyFacultyInput | ContactStudentsCreateManyFacultyInput[]
    skipDuplicates?: boolean
  }

  export type ContactTeachersCreateWithoutFacultiesInput = {
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: BatchCreateNestedManyWithoutContactTeachersInput
  }

  export type ContactTeachersUncheckedCreateWithoutFacultiesInput = {
    id?: number
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: BatchUncheckedCreateNestedManyWithoutContactTeachersInput
  }

  export type ContactTeachersCreateOrConnectWithoutFacultiesInput = {
    where: ContactTeachersWhereUniqueInput
    create: XOR<ContactTeachersCreateWithoutFacultiesInput, ContactTeachersUncheckedCreateWithoutFacultiesInput>
  }

  export type ContactManagementCreateWithoutFacultiesInput = {
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: BatchCreateNestedManyWithoutContactManagementInput
  }

  export type ContactManagementUncheckedCreateWithoutFacultiesInput = {
    id?: number
    name: string
    email: string
    phone: string
    status: $Enums.EmployeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: BatchUncheckedCreateNestedManyWithoutContactManagementInput
  }

  export type ContactManagementCreateOrConnectWithoutFacultiesInput = {
    where: ContactManagementWhereUniqueInput
    create: XOR<ContactManagementCreateWithoutFacultiesInput, ContactManagementUncheckedCreateWithoutFacultiesInput>
  }

  export type ContactStudentsUpsertWithWhereUniqueWithoutFacultyInput = {
    where: ContactStudentsWhereUniqueInput
    update: XOR<ContactStudentsUpdateWithoutFacultyInput, ContactStudentsUncheckedUpdateWithoutFacultyInput>
    create: XOR<ContactStudentsCreateWithoutFacultyInput, ContactStudentsUncheckedCreateWithoutFacultyInput>
  }

  export type ContactStudentsUpdateWithWhereUniqueWithoutFacultyInput = {
    where: ContactStudentsWhereUniqueInput
    data: XOR<ContactStudentsUpdateWithoutFacultyInput, ContactStudentsUncheckedUpdateWithoutFacultyInput>
  }

  export type ContactStudentsUpdateManyWithWhereWithoutFacultyInput = {
    where: ContactStudentsScalarWhereInput
    data: XOR<ContactStudentsUpdateManyMutationInput, ContactStudentsUncheckedUpdateManyWithoutFacultyInput>
  }

  export type ContactTeachersUpsertWithWhereUniqueWithoutFacultiesInput = {
    where: ContactTeachersWhereUniqueInput
    update: XOR<ContactTeachersUpdateWithoutFacultiesInput, ContactTeachersUncheckedUpdateWithoutFacultiesInput>
    create: XOR<ContactTeachersCreateWithoutFacultiesInput, ContactTeachersUncheckedCreateWithoutFacultiesInput>
  }

  export type ContactTeachersUpdateWithWhereUniqueWithoutFacultiesInput = {
    where: ContactTeachersWhereUniqueInput
    data: XOR<ContactTeachersUpdateWithoutFacultiesInput, ContactTeachersUncheckedUpdateWithoutFacultiesInput>
  }

  export type ContactTeachersUpdateManyWithWhereWithoutFacultiesInput = {
    where: ContactTeachersScalarWhereInput
    data: XOR<ContactTeachersUpdateManyMutationInput, ContactTeachersUncheckedUpdateManyWithoutFacultiesInput>
  }

  export type ContactManagementUpsertWithWhereUniqueWithoutFacultiesInput = {
    where: ContactManagementWhereUniqueInput
    update: XOR<ContactManagementUpdateWithoutFacultiesInput, ContactManagementUncheckedUpdateWithoutFacultiesInput>
    create: XOR<ContactManagementCreateWithoutFacultiesInput, ContactManagementUncheckedCreateWithoutFacultiesInput>
  }

  export type ContactManagementUpdateWithWhereUniqueWithoutFacultiesInput = {
    where: ContactManagementWhereUniqueInput
    data: XOR<ContactManagementUpdateWithoutFacultiesInput, ContactManagementUncheckedUpdateWithoutFacultiesInput>
  }

  export type ContactManagementUpdateManyWithWhereWithoutFacultiesInput = {
    where: ContactManagementScalarWhereInput
    data: XOR<ContactManagementUpdateManyMutationInput, ContactManagementUncheckedUpdateManyWithoutFacultiesInput>
  }

  export type FacultyCreateWithoutContactStudentsInput = {
    name: string
    contactTeachers?: ContactTeachersCreateNestedManyWithoutFacultiesInput
    contactManagement?: ContactManagementCreateNestedManyWithoutFacultiesInput
  }

  export type FacultyUncheckedCreateWithoutContactStudentsInput = {
    id?: number
    name: string
    contactTeachers?: ContactTeachersUncheckedCreateNestedManyWithoutFacultiesInput
    contactManagement?: ContactManagementUncheckedCreateNestedManyWithoutFacultiesInput
  }

  export type FacultyCreateOrConnectWithoutContactStudentsInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutContactStudentsInput, FacultyUncheckedCreateWithoutContactStudentsInput>
  }

  export type BatchCreateWithoutContactStudentsInput = {
    year: string
    contactTeachers?: ContactTeachersCreateNestedManyWithoutBatchesInput
    contactManagement?: ContactManagementCreateNestedManyWithoutBatchesInput
  }

  export type BatchUncheckedCreateWithoutContactStudentsInput = {
    id?: number
    year: string
    contactTeachers?: ContactTeachersUncheckedCreateNestedManyWithoutBatchesInput
    contactManagement?: ContactManagementUncheckedCreateNestedManyWithoutBatchesInput
  }

  export type BatchCreateOrConnectWithoutContactStudentsInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutContactStudentsInput, BatchUncheckedCreateWithoutContactStudentsInput>
  }

  export type FacultyUpsertWithoutContactStudentsInput = {
    update: XOR<FacultyUpdateWithoutContactStudentsInput, FacultyUncheckedUpdateWithoutContactStudentsInput>
    create: XOR<FacultyCreateWithoutContactStudentsInput, FacultyUncheckedCreateWithoutContactStudentsInput>
    where?: FacultyWhereInput
  }

  export type FacultyUpdateToOneWithWhereWithoutContactStudentsInput = {
    where?: FacultyWhereInput
    data: XOR<FacultyUpdateWithoutContactStudentsInput, FacultyUncheckedUpdateWithoutContactStudentsInput>
  }

  export type FacultyUpdateWithoutContactStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    contactTeachers?: ContactTeachersUpdateManyWithoutFacultiesNestedInput
    contactManagement?: ContactManagementUpdateManyWithoutFacultiesNestedInput
  }

  export type FacultyUncheckedUpdateWithoutContactStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contactTeachers?: ContactTeachersUncheckedUpdateManyWithoutFacultiesNestedInput
    contactManagement?: ContactManagementUncheckedUpdateManyWithoutFacultiesNestedInput
  }

  export type BatchUpsertWithoutContactStudentsInput = {
    update: XOR<BatchUpdateWithoutContactStudentsInput, BatchUncheckedUpdateWithoutContactStudentsInput>
    create: XOR<BatchCreateWithoutContactStudentsInput, BatchUncheckedCreateWithoutContactStudentsInput>
    where?: BatchWhereInput
  }

  export type BatchUpdateToOneWithWhereWithoutContactStudentsInput = {
    where?: BatchWhereInput
    data: XOR<BatchUpdateWithoutContactStudentsInput, BatchUncheckedUpdateWithoutContactStudentsInput>
  }

  export type BatchUpdateWithoutContactStudentsInput = {
    year?: StringFieldUpdateOperationsInput | string
    contactTeachers?: ContactTeachersUpdateManyWithoutBatchesNestedInput
    contactManagement?: ContactManagementUpdateManyWithoutBatchesNestedInput
  }

  export type BatchUncheckedUpdateWithoutContactStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    contactTeachers?: ContactTeachersUncheckedUpdateManyWithoutBatchesNestedInput
    contactManagement?: ContactManagementUncheckedUpdateManyWithoutBatchesNestedInput
  }

  export type FacultyCreateWithoutContactTeachersInput = {
    name: string
    contactStudents?: ContactStudentsCreateNestedManyWithoutFacultyInput
    contactManagement?: ContactManagementCreateNestedManyWithoutFacultiesInput
  }

  export type FacultyUncheckedCreateWithoutContactTeachersInput = {
    id?: number
    name: string
    contactStudents?: ContactStudentsUncheckedCreateNestedManyWithoutFacultyInput
    contactManagement?: ContactManagementUncheckedCreateNestedManyWithoutFacultiesInput
  }

  export type FacultyCreateOrConnectWithoutContactTeachersInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutContactTeachersInput, FacultyUncheckedCreateWithoutContactTeachersInput>
  }

  export type BatchCreateWithoutContactTeachersInput = {
    year: string
    contactStudents?: ContactStudentsCreateNestedManyWithoutBatchInput
    contactManagement?: ContactManagementCreateNestedManyWithoutBatchesInput
  }

  export type BatchUncheckedCreateWithoutContactTeachersInput = {
    id?: number
    year: string
    contactStudents?: ContactStudentsUncheckedCreateNestedManyWithoutBatchInput
    contactManagement?: ContactManagementUncheckedCreateNestedManyWithoutBatchesInput
  }

  export type BatchCreateOrConnectWithoutContactTeachersInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutContactTeachersInput, BatchUncheckedCreateWithoutContactTeachersInput>
  }

  export type FacultyUpsertWithWhereUniqueWithoutContactTeachersInput = {
    where: FacultyWhereUniqueInput
    update: XOR<FacultyUpdateWithoutContactTeachersInput, FacultyUncheckedUpdateWithoutContactTeachersInput>
    create: XOR<FacultyCreateWithoutContactTeachersInput, FacultyUncheckedCreateWithoutContactTeachersInput>
  }

  export type FacultyUpdateWithWhereUniqueWithoutContactTeachersInput = {
    where: FacultyWhereUniqueInput
    data: XOR<FacultyUpdateWithoutContactTeachersInput, FacultyUncheckedUpdateWithoutContactTeachersInput>
  }

  export type FacultyUpdateManyWithWhereWithoutContactTeachersInput = {
    where: FacultyScalarWhereInput
    data: XOR<FacultyUpdateManyMutationInput, FacultyUncheckedUpdateManyWithoutContactTeachersInput>
  }

  export type FacultyScalarWhereInput = {
    AND?: FacultyScalarWhereInput | FacultyScalarWhereInput[]
    OR?: FacultyScalarWhereInput[]
    NOT?: FacultyScalarWhereInput | FacultyScalarWhereInput[]
    id?: IntFilter<"Faculty"> | number
    name?: StringFilter<"Faculty"> | string
  }

  export type BatchUpsertWithWhereUniqueWithoutContactTeachersInput = {
    where: BatchWhereUniqueInput
    update: XOR<BatchUpdateWithoutContactTeachersInput, BatchUncheckedUpdateWithoutContactTeachersInput>
    create: XOR<BatchCreateWithoutContactTeachersInput, BatchUncheckedCreateWithoutContactTeachersInput>
  }

  export type BatchUpdateWithWhereUniqueWithoutContactTeachersInput = {
    where: BatchWhereUniqueInput
    data: XOR<BatchUpdateWithoutContactTeachersInput, BatchUncheckedUpdateWithoutContactTeachersInput>
  }

  export type BatchUpdateManyWithWhereWithoutContactTeachersInput = {
    where: BatchScalarWhereInput
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyWithoutContactTeachersInput>
  }

  export type BatchScalarWhereInput = {
    AND?: BatchScalarWhereInput | BatchScalarWhereInput[]
    OR?: BatchScalarWhereInput[]
    NOT?: BatchScalarWhereInput | BatchScalarWhereInput[]
    id?: IntFilter<"Batch"> | number
    year?: StringFilter<"Batch"> | string
  }

  export type FacultyCreateWithoutContactManagementInput = {
    name: string
    contactStudents?: ContactStudentsCreateNestedManyWithoutFacultyInput
    contactTeachers?: ContactTeachersCreateNestedManyWithoutFacultiesInput
  }

  export type FacultyUncheckedCreateWithoutContactManagementInput = {
    id?: number
    name: string
    contactStudents?: ContactStudentsUncheckedCreateNestedManyWithoutFacultyInput
    contactTeachers?: ContactTeachersUncheckedCreateNestedManyWithoutFacultiesInput
  }

  export type FacultyCreateOrConnectWithoutContactManagementInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutContactManagementInput, FacultyUncheckedCreateWithoutContactManagementInput>
  }

  export type BatchCreateWithoutContactManagementInput = {
    year: string
    contactStudents?: ContactStudentsCreateNestedManyWithoutBatchInput
    contactTeachers?: ContactTeachersCreateNestedManyWithoutBatchesInput
  }

  export type BatchUncheckedCreateWithoutContactManagementInput = {
    id?: number
    year: string
    contactStudents?: ContactStudentsUncheckedCreateNestedManyWithoutBatchInput
    contactTeachers?: ContactTeachersUncheckedCreateNestedManyWithoutBatchesInput
  }

  export type BatchCreateOrConnectWithoutContactManagementInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutContactManagementInput, BatchUncheckedCreateWithoutContactManagementInput>
  }

  export type FacultyUpsertWithWhereUniqueWithoutContactManagementInput = {
    where: FacultyWhereUniqueInput
    update: XOR<FacultyUpdateWithoutContactManagementInput, FacultyUncheckedUpdateWithoutContactManagementInput>
    create: XOR<FacultyCreateWithoutContactManagementInput, FacultyUncheckedCreateWithoutContactManagementInput>
  }

  export type FacultyUpdateWithWhereUniqueWithoutContactManagementInput = {
    where: FacultyWhereUniqueInput
    data: XOR<FacultyUpdateWithoutContactManagementInput, FacultyUncheckedUpdateWithoutContactManagementInput>
  }

  export type FacultyUpdateManyWithWhereWithoutContactManagementInput = {
    where: FacultyScalarWhereInput
    data: XOR<FacultyUpdateManyMutationInput, FacultyUncheckedUpdateManyWithoutContactManagementInput>
  }

  export type BatchUpsertWithWhereUniqueWithoutContactManagementInput = {
    where: BatchWhereUniqueInput
    update: XOR<BatchUpdateWithoutContactManagementInput, BatchUncheckedUpdateWithoutContactManagementInput>
    create: XOR<BatchCreateWithoutContactManagementInput, BatchUncheckedCreateWithoutContactManagementInput>
  }

  export type BatchUpdateWithWhereUniqueWithoutContactManagementInput = {
    where: BatchWhereUniqueInput
    data: XOR<BatchUpdateWithoutContactManagementInput, BatchUncheckedUpdateWithoutContactManagementInput>
  }

  export type BatchUpdateManyWithWhereWithoutContactManagementInput = {
    where: BatchScalarWhereInput
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyWithoutContactManagementInput>
  }

  export type RecipientCreateWithoutMailingInput = {
    email: string
    status?: $Enums.MailingStatus
  }

  export type RecipientUncheckedCreateWithoutMailingInput = {
    id?: number
    email: string
    status?: $Enums.MailingStatus
  }

  export type RecipientCreateOrConnectWithoutMailingInput = {
    where: RecipientWhereUniqueInput
    create: XOR<RecipientCreateWithoutMailingInput, RecipientUncheckedCreateWithoutMailingInput>
  }

  export type RecipientCreateManyMailingInputEnvelope = {
    data: RecipientCreateManyMailingInput | RecipientCreateManyMailingInput[]
    skipDuplicates?: boolean
  }

  export type RecipientUpsertWithWhereUniqueWithoutMailingInput = {
    where: RecipientWhereUniqueInput
    update: XOR<RecipientUpdateWithoutMailingInput, RecipientUncheckedUpdateWithoutMailingInput>
    create: XOR<RecipientCreateWithoutMailingInput, RecipientUncheckedCreateWithoutMailingInput>
  }

  export type RecipientUpdateWithWhereUniqueWithoutMailingInput = {
    where: RecipientWhereUniqueInput
    data: XOR<RecipientUpdateWithoutMailingInput, RecipientUncheckedUpdateWithoutMailingInput>
  }

  export type RecipientUpdateManyWithWhereWithoutMailingInput = {
    where: RecipientScalarWhereInput
    data: XOR<RecipientUpdateManyMutationInput, RecipientUncheckedUpdateManyWithoutMailingInput>
  }

  export type RecipientScalarWhereInput = {
    AND?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
    OR?: RecipientScalarWhereInput[]
    NOT?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
    id?: IntFilter<"Recipient"> | number
    mailingId?: IntFilter<"Recipient"> | number
    email?: StringFilter<"Recipient"> | string
    status?: EnumMailingStatusFilter<"Recipient"> | $Enums.MailingStatus
  }

  export type MailingCreateWithoutRecipientsInput = {
    replyTo: string
    subject: string
    content: string
    createdAt?: Date | string
  }

  export type MailingUncheckedCreateWithoutRecipientsInput = {
    id?: number
    replyTo: string
    subject: string
    content: string
    createdAt?: Date | string
  }

  export type MailingCreateOrConnectWithoutRecipientsInput = {
    where: MailingWhereUniqueInput
    create: XOR<MailingCreateWithoutRecipientsInput, MailingUncheckedCreateWithoutRecipientsInput>
  }

  export type MailingUpsertWithoutRecipientsInput = {
    update: XOR<MailingUpdateWithoutRecipientsInput, MailingUncheckedUpdateWithoutRecipientsInput>
    create: XOR<MailingCreateWithoutRecipientsInput, MailingUncheckedCreateWithoutRecipientsInput>
    where?: MailingWhereInput
  }

  export type MailingUpdateToOneWithWhereWithoutRecipientsInput = {
    where?: MailingWhereInput
    data: XOR<MailingUpdateWithoutRecipientsInput, MailingUncheckedUpdateWithoutRecipientsInput>
  }

  export type MailingUpdateWithoutRecipientsInput = {
    replyTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailingUncheckedUpdateWithoutRecipientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    replyTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactStudentsCreateManyBatchInput = {
    id?: number
    name: string
    email: string
    phone: string
    facultyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactStudentsUpdateWithoutBatchInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculty?: FacultyUpdateOneRequiredWithoutContactStudentsNestedInput
  }

  export type ContactStudentsUncheckedUpdateWithoutBatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    facultyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactStudentsUncheckedUpdateManyWithoutBatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    facultyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactTeachersUpdateWithoutBatchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculties?: FacultyUpdateManyWithoutContactTeachersNestedInput
  }

  export type ContactTeachersUncheckedUpdateWithoutBatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculties?: FacultyUncheckedUpdateManyWithoutContactTeachersNestedInput
  }

  export type ContactTeachersUncheckedUpdateManyWithoutBatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactManagementUpdateWithoutBatchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculties?: FacultyUpdateManyWithoutContactManagementNestedInput
  }

  export type ContactManagementUncheckedUpdateWithoutBatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faculties?: FacultyUncheckedUpdateManyWithoutContactManagementNestedInput
  }

  export type ContactManagementUncheckedUpdateManyWithoutBatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactStudentsCreateManyFacultyInput = {
    id?: number
    name: string
    email: string
    phone: string
    batchId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactStudentsUpdateWithoutFacultyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batch?: BatchUpdateOneRequiredWithoutContactStudentsNestedInput
  }

  export type ContactStudentsUncheckedUpdateWithoutFacultyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    batchId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactStudentsUncheckedUpdateManyWithoutFacultyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    batchId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactTeachersUpdateWithoutFacultiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: BatchUpdateManyWithoutContactTeachersNestedInput
  }

  export type ContactTeachersUncheckedUpdateWithoutFacultiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: BatchUncheckedUpdateManyWithoutContactTeachersNestedInput
  }

  export type ContactTeachersUncheckedUpdateManyWithoutFacultiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactManagementUpdateWithoutFacultiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: BatchUpdateManyWithoutContactManagementNestedInput
  }

  export type ContactManagementUncheckedUpdateWithoutFacultiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: BatchUncheckedUpdateManyWithoutContactManagementNestedInput
  }

  export type ContactManagementUncheckedUpdateManyWithoutFacultiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumEmployeeStatusFieldUpdateOperationsInput | $Enums.EmployeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyUpdateWithoutContactTeachersInput = {
    name?: StringFieldUpdateOperationsInput | string
    contactStudents?: ContactStudentsUpdateManyWithoutFacultyNestedInput
    contactManagement?: ContactManagementUpdateManyWithoutFacultiesNestedInput
  }

  export type FacultyUncheckedUpdateWithoutContactTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contactStudents?: ContactStudentsUncheckedUpdateManyWithoutFacultyNestedInput
    contactManagement?: ContactManagementUncheckedUpdateManyWithoutFacultiesNestedInput
  }

  export type FacultyUncheckedUpdateManyWithoutContactTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BatchUpdateWithoutContactTeachersInput = {
    year?: StringFieldUpdateOperationsInput | string
    contactStudents?: ContactStudentsUpdateManyWithoutBatchNestedInput
    contactManagement?: ContactManagementUpdateManyWithoutBatchesNestedInput
  }

  export type BatchUncheckedUpdateWithoutContactTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    contactStudents?: ContactStudentsUncheckedUpdateManyWithoutBatchNestedInput
    contactManagement?: ContactManagementUncheckedUpdateManyWithoutBatchesNestedInput
  }

  export type BatchUncheckedUpdateManyWithoutContactTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyUpdateWithoutContactManagementInput = {
    name?: StringFieldUpdateOperationsInput | string
    contactStudents?: ContactStudentsUpdateManyWithoutFacultyNestedInput
    contactTeachers?: ContactTeachersUpdateManyWithoutFacultiesNestedInput
  }

  export type FacultyUncheckedUpdateWithoutContactManagementInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contactStudents?: ContactStudentsUncheckedUpdateManyWithoutFacultyNestedInput
    contactTeachers?: ContactTeachersUncheckedUpdateManyWithoutFacultiesNestedInput
  }

  export type FacultyUncheckedUpdateManyWithoutContactManagementInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BatchUpdateWithoutContactManagementInput = {
    year?: StringFieldUpdateOperationsInput | string
    contactStudents?: ContactStudentsUpdateManyWithoutBatchNestedInput
    contactTeachers?: ContactTeachersUpdateManyWithoutBatchesNestedInput
  }

  export type BatchUncheckedUpdateWithoutContactManagementInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    contactStudents?: ContactStudentsUncheckedUpdateManyWithoutBatchNestedInput
    contactTeachers?: ContactTeachersUncheckedUpdateManyWithoutBatchesNestedInput
  }

  export type BatchUncheckedUpdateManyWithoutContactManagementInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
  }

  export type RecipientCreateManyMailingInput = {
    id?: number
    email: string
    status?: $Enums.MailingStatus
  }

  export type RecipientUpdateWithoutMailingInput = {
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumMailingStatusFieldUpdateOperationsInput | $Enums.MailingStatus
  }

  export type RecipientUncheckedUpdateWithoutMailingInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumMailingStatusFieldUpdateOperationsInput | $Enums.MailingStatus
  }

  export type RecipientUncheckedUpdateManyWithoutMailingInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumMailingStatusFieldUpdateOperationsInput | $Enums.MailingStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}