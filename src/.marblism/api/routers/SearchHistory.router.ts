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

        createMany: procedure.input($Schema.SearchHistoryInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).searchHistory.createMany(input as any))),

        create: procedure.input($Schema.SearchHistoryInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).searchHistory.create(input as any))),

        deleteMany: procedure.input($Schema.SearchHistoryInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).searchHistory.deleteMany(input as any))),

        delete: procedure.input($Schema.SearchHistoryInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).searchHistory.delete(input as any))),

        findFirst: procedure.input($Schema.SearchHistoryInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).searchHistory.findFirst(input as any))),

        findMany: procedure.input($Schema.SearchHistoryInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).searchHistory.findMany(input as any))),

        findUnique: procedure.input($Schema.SearchHistoryInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).searchHistory.findUnique(input as any))),

        updateMany: procedure.input($Schema.SearchHistoryInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).searchHistory.updateMany(input as any))),

        update: procedure.input($Schema.SearchHistoryInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).searchHistory.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SearchHistoryCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SearchHistoryCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SearchHistoryCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SearchHistoryCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SearchHistoryCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SearchHistoryCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SearchHistoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SearchHistoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SearchHistoryCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SearchHistoryCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SearchHistoryGetPayload<T>, Context>) => Promise<Prisma.SearchHistoryGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SearchHistoryDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SearchHistoryDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SearchHistoryDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SearchHistoryDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SearchHistoryDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SearchHistoryDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SearchHistoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SearchHistoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SearchHistoryDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SearchHistoryDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SearchHistoryGetPayload<T>, Context>) => Promise<Prisma.SearchHistoryGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SearchHistoryFindFirstArgs, TData = Prisma.SearchHistoryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SearchHistoryFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SearchHistoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SearchHistoryFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SearchHistoryFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SearchHistoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SearchHistoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SearchHistoryFindManyArgs, TData = Array<Prisma.SearchHistoryGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SearchHistoryFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SearchHistoryGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SearchHistoryFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SearchHistoryFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SearchHistoryGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SearchHistoryGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SearchHistoryFindUniqueArgs, TData = Prisma.SearchHistoryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SearchHistoryFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SearchHistoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SearchHistoryFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SearchHistoryFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SearchHistoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SearchHistoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SearchHistoryUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SearchHistoryUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SearchHistoryUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SearchHistoryUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SearchHistoryUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SearchHistoryUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SearchHistoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SearchHistoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SearchHistoryUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SearchHistoryUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SearchHistoryGetPayload<T>, Context>) => Promise<Prisma.SearchHistoryGetPayload<T>>
            };

    };
}
