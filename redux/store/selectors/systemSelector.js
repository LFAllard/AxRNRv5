import { createSelector } from "@reduxjs/toolkit";

export const selectAktSys = createSelector(
  (state) => state.entities.system.aktsys,
  (aktsys) => aktsys
);
