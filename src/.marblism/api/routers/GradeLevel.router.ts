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

        createMany: procedure.input($Schema.GradeLevelInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).gradeLevel.createMany(input as any))),

        create: procedure.input($Schema.GradeLevelInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).gradeLevel.create(input as any))),

        deleteMany: procedure.input($Schema.GradeLevelInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).gradeLevel.deleteMany(input as any))),

        delete: procedure.input($Schema.GradeLevelInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).gradeLevel.delete(input as any))),

        findFirst: procedure.input($Schema.GradeLevelInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).gradeLevel.findFirst(input as any))),

        findMany: procedure.input($Schema.GradeLevelInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).gradeLevel.findMany(input as any))),

        findUnique: procedure.input($Schema.GradeLevelInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).gradeLevel.findUnique(input as any))),

        updateMany: procedure.input($Schema.GradeLevelInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).gradeLevel.updateMany(input as any))),

        update: procedure.input($Schema.GradeLevelInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).gradeLevel.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.GradeLevelCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GradeLevelCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GradeLevelCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GradeLevelCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.GradeLevelCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GradeLevelCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.GradeLevelGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.GradeLevelGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GradeLevelCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GradeLevelCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.GradeLevelGetPayload<T>, Context>) => Promise<Prisma.GradeLevelGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.GradeLevelDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GradeLevelDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GradeLevelDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GradeLevelDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.GradeLevelDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GradeLevelDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.GradeLevelGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.GradeLevelGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GradeLevelDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GradeLevelDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.GradeLevelGetPayload<T>, Context>) => Promise<Prisma.GradeLevelGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.GradeLevelFindFirstArgs, TData = Prisma.GradeLevelGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.GradeLevelFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GradeLevelGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.GradeLevelFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.GradeLevelFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GradeLevelGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GradeLevelGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.GradeLevelFindManyArgs, TData = Array<Prisma.GradeLevelGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.GradeLevelFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.GradeLevelGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.GradeLevelFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.GradeLevelFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.GradeLevelGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.GradeLevelGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.GradeLevelFindUniqueArgs, TData = Prisma.GradeLevelGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.GradeLevelFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GradeLevelGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.GradeLevelFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.GradeLevelFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GradeLevelGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GradeLevelGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.GradeLevelUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GradeLevelUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GradeLevelUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GradeLevelUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.GradeLevelUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.GradeLevelUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.GradeLevelGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.GradeLevelGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.GradeLevelUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.GradeLevelUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.GradeLevelGetPayload<T>, Context>) => Promise<Prisma.GradeLevelGetPayload<T>>
            };

    };
}
