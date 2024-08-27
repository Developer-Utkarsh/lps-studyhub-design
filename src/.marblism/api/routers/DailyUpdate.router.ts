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

        createMany: procedure.input($Schema.DailyUpdateInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dailyUpdate.createMany(input as any))),

        create: procedure.input($Schema.DailyUpdateInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dailyUpdate.create(input as any))),

        deleteMany: procedure.input($Schema.DailyUpdateInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dailyUpdate.deleteMany(input as any))),

        delete: procedure.input($Schema.DailyUpdateInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dailyUpdate.delete(input as any))),

        findFirst: procedure.input($Schema.DailyUpdateInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).dailyUpdate.findFirst(input as any))),

        findMany: procedure.input($Schema.DailyUpdateInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).dailyUpdate.findMany(input as any))),

        findUnique: procedure.input($Schema.DailyUpdateInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).dailyUpdate.findUnique(input as any))),

        updateMany: procedure.input($Schema.DailyUpdateInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dailyUpdate.updateMany(input as any))),

        update: procedure.input($Schema.DailyUpdateInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dailyUpdate.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.DailyUpdateCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DailyUpdateCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DailyUpdateCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DailyUpdateCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.DailyUpdateCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DailyUpdateCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DailyUpdateGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DailyUpdateGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DailyUpdateCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DailyUpdateCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DailyUpdateGetPayload<T>, Context>) => Promise<Prisma.DailyUpdateGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.DailyUpdateDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DailyUpdateDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DailyUpdateDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DailyUpdateDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.DailyUpdateDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DailyUpdateDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DailyUpdateGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DailyUpdateGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DailyUpdateDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DailyUpdateDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DailyUpdateGetPayload<T>, Context>) => Promise<Prisma.DailyUpdateGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.DailyUpdateFindFirstArgs, TData = Prisma.DailyUpdateGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DailyUpdateFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DailyUpdateGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DailyUpdateFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DailyUpdateFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DailyUpdateGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DailyUpdateGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.DailyUpdateFindManyArgs, TData = Array<Prisma.DailyUpdateGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.DailyUpdateFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.DailyUpdateGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DailyUpdateFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DailyUpdateFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.DailyUpdateGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.DailyUpdateGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.DailyUpdateFindUniqueArgs, TData = Prisma.DailyUpdateGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DailyUpdateFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DailyUpdateGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DailyUpdateFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DailyUpdateFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DailyUpdateGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DailyUpdateGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.DailyUpdateUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DailyUpdateUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DailyUpdateUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DailyUpdateUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.DailyUpdateUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DailyUpdateUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DailyUpdateGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DailyUpdateGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DailyUpdateUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DailyUpdateUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DailyUpdateGetPayload<T>, Context>) => Promise<Prisma.DailyUpdateGetPayload<T>>
            };

    };
}
