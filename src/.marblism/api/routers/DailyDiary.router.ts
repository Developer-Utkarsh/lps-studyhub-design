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

        createMany: procedure.input($Schema.DailyDiaryInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dailyDiary.createMany(input as any))),

        create: procedure.input($Schema.DailyDiaryInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dailyDiary.create(input as any))),

        deleteMany: procedure.input($Schema.DailyDiaryInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dailyDiary.deleteMany(input as any))),

        delete: procedure.input($Schema.DailyDiaryInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dailyDiary.delete(input as any))),

        findFirst: procedure.input($Schema.DailyDiaryInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).dailyDiary.findFirst(input as any))),

        findMany: procedure.input($Schema.DailyDiaryInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).dailyDiary.findMany(input as any))),

        findUnique: procedure.input($Schema.DailyDiaryInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).dailyDiary.findUnique(input as any))),

        updateMany: procedure.input($Schema.DailyDiaryInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dailyDiary.updateMany(input as any))),

        update: procedure.input($Schema.DailyDiaryInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).dailyDiary.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.DailyDiaryCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DailyDiaryCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DailyDiaryCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DailyDiaryCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.DailyDiaryCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DailyDiaryCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DailyDiaryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DailyDiaryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DailyDiaryCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DailyDiaryCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DailyDiaryGetPayload<T>, Context>) => Promise<Prisma.DailyDiaryGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.DailyDiaryDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DailyDiaryDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DailyDiaryDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DailyDiaryDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.DailyDiaryDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DailyDiaryDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DailyDiaryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DailyDiaryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DailyDiaryDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DailyDiaryDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DailyDiaryGetPayload<T>, Context>) => Promise<Prisma.DailyDiaryGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.DailyDiaryFindFirstArgs, TData = Prisma.DailyDiaryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DailyDiaryFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DailyDiaryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DailyDiaryFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DailyDiaryFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DailyDiaryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DailyDiaryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.DailyDiaryFindManyArgs, TData = Array<Prisma.DailyDiaryGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.DailyDiaryFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.DailyDiaryGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DailyDiaryFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DailyDiaryFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.DailyDiaryGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.DailyDiaryGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.DailyDiaryFindUniqueArgs, TData = Prisma.DailyDiaryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DailyDiaryFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DailyDiaryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DailyDiaryFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DailyDiaryFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DailyDiaryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DailyDiaryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.DailyDiaryUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DailyDiaryUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DailyDiaryUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DailyDiaryUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.DailyDiaryUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DailyDiaryUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DailyDiaryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DailyDiaryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DailyDiaryUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DailyDiaryUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DailyDiaryGetPayload<T>, Context>) => Promise<Prisma.DailyDiaryGetPayload<T>>
            };

    };
}
