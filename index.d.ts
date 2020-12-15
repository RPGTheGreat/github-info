declare module "userinfo-github" {
export class Info {

    public fetchInfo(name: string): Promise<string>;
    public on(error): error
}

export const Version: string;
}