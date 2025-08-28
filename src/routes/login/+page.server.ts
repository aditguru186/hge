import { Action, PageServerLoad } from "@sveltejs/kit";

export const load: PageServerLoad = async ({  }) => {
  if (locals.user) {
    return {
      status: 302,
      redirect: "/",
    };
  }
  return {};
};