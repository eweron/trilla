export const utils = {
  dateFormat: (date: string) => {
    return new Date(date).toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  },
};
