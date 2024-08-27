/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createUserGradeLevelRouter from "./UserGradeLevel.router";
import createGradeLevelRouter from "./GradeLevel.router";
import createStudyStreakRouter from "./StudyStreak.router";
import createDailyDiaryRouter from "./DailyDiary.router";
import createSearchHistoryRouter from "./SearchHistory.router";
import createSubjectRouter from "./Subject.router";
import createResourceRouter from "./Resource.router";
import createDailyUpdateRouter from "./DailyUpdate.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as UserGradeLevelClientType } from "./UserGradeLevel.router";
import { ClientType as GradeLevelClientType } from "./GradeLevel.router";
import { ClientType as StudyStreakClientType } from "./StudyStreak.router";
import { ClientType as DailyDiaryClientType } from "./DailyDiary.router";
import { ClientType as SearchHistoryClientType } from "./SearchHistory.router";
import { ClientType as SubjectClientType } from "./Subject.router";
import { ClientType as ResourceClientType } from "./Resource.router";
import { ClientType as DailyUpdateClientType } from "./DailyUpdate.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        userGradeLevel: createUserGradeLevelRouter(router, procedure),
        gradeLevel: createGradeLevelRouter(router, procedure),
        studyStreak: createStudyStreakRouter(router, procedure),
        dailyDiary: createDailyDiaryRouter(router, procedure),
        searchHistory: createSearchHistoryRouter(router, procedure),
        subject: createSubjectRouter(router, procedure),
        resource: createResourceRouter(router, procedure),
        dailyUpdate: createDailyUpdateRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    userGradeLevel: UserGradeLevelClientType<AppRouter>;
    gradeLevel: GradeLevelClientType<AppRouter>;
    studyStreak: StudyStreakClientType<AppRouter>;
    dailyDiary: DailyDiaryClientType<AppRouter>;
    searchHistory: SearchHistoryClientType<AppRouter>;
    subject: SubjectClientType<AppRouter>;
    resource: ResourceClientType<AppRouter>;
    dailyUpdate: DailyUpdateClientType<AppRouter>;
}
