function selectPools(aktsys, data) {
  // Retrieve the spool and epool values from the given aktsys
  const spool = data.start.startData.spool[aktsys];
  const epool = data.start.startData.epool[aktsys];

  // Check if both values are found
  if (spool !== undefined && epool !== undefined) {
    return { spool, epool };
  } else {
    throw new Error(`No spool or epool found for aktsys: ${aktsys}`);
  }
}

// Example usage
const data = {
  /* your data object here */
};
const aktsys = "stma";

try {
  const pools = selectPools(aktsys, data);
  console.log(`spool: ${pools.spool}, epool: ${pools.epool}`);
} catch (error) {
  console.error(error.message);
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const selectPoolsByAktsys = (state, aktsys) => {
  // Get the 'epool' and 'spool' values from the state
  const ePoolValue = state["epool"][aktsys];
  const sPoolValue = state["spool"][aktsys];

  // Check if the values are available
  if (ePoolValue && sPoolValue) {
    return {
      ePool: ePoolValue,
      sPool: sPoolValue,
    };
  }

  // Return null or a default value if the values are not found
  return null;
};

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const pools = selectPoolsByAktsys(state, "stma");
