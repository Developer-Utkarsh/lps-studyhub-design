/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.UserGradeLevelInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userGradeLevel.createMany(input as any))),

        create: procedure.input($Schema.UserGradeLevelInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userGradeLevel.create(input as any))),

        deleteMany: procedure.input($Schema.UserGradeLevelInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userGradeLevel.deleteMany(input as any))),

        delete: procedure.input($Schema.UserGradeLevelInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userGradeLevel.delete(input as any))),

        findFirst: procedure.input($Schema.UserGradeLevelInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).userGradeLevel.findFirst(input as any))),

        findMany: procedure.input($Schema.UserGradeLevelInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).userGradeLevel.findMany(input as any))),

        findUnique: procedure.input($Schema.UserGradeLevelInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).userGradeLevel.findUnique(input as any))),

        updateMany: procedure.input($Schema.UserGradeLevelInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userGradeLevel.updateMany(input as any))),

        update: procedure.input($Schema.UserGradeLevelInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userGradeLevel.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.UserGradeLevelCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserGradeLevelCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserGradeLevelCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserGradeLevelCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.UserGradeLevelCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserGradeLevelCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserGradeLevelGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserGradeLevelGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserGradeLevelCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserGradeLevelCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserGradeLevelGetPayload<T>, Context>) => Promise<Prisma.UserGradeLevelGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.UserGradeLevelDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserGradeLevelDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserGradeLevelDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserGradeLevelDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.UserGradeLevelDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserGradeLevelDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserGradeLevelGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserGradeLevelGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserGradeLevelDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserGradeLevelDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserGradeLevelGetPayload<T>, Context>) => Promise<Prisma.UserGradeLevelGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.UserGradeLevelFindFirstArgs, TData = Prisma.UserGradeLevelGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserGradeLevelFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserGradeLevelGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserGradeLevelFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserGradeLevelFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserGradeLevelGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserGradeLevelGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.UserGradeLevelFindManyArgs, TData = Array<Prisma.UserGradeLevelGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.UserGradeLevelFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.UserGradeLevelGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserGradeLevelFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserGradeLevelFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.UserGradeLevelGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.UserGradeLevelGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.UserGradeLevelFindUniqueArgs, TData = Prisma.UserGradeLevelGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserGradeLevelFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserGradeLevelGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserGradeLevelFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserGradeLevelFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserGradeLevelGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserGradeLevelGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.UserGradeLevelUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserGradeLevelUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserGradeLevelUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserGradeLevelUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.UserGradeLevelUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserGradeLevelUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserGradeLevelGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserGradeLevelGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserGradeLevelUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserGradeLevelUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserGradeLevelGetPayload<T>, Context>) => Promise<Prisma.UserGradeLevelGetPayload<T>>
            };

    };
}
