const url = process.env.DB_URL + '/pof_rbi/thinning/' || 'http://localhost:3030/pofRBIDate';

const POFRBIDate = {
  async postItem(value: any) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch Companies data');
    }

    return await res.json();
  },
  async getItem(id: string, param: string) {
    const res = await fetch(url + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch Companies data');
    }

    const { data } = await res.json();
    // return data[0]?.[param] ?? {};
    return data ?? {};
  }
};

export async function getThinning(id: string) {
  return await POFRBIDate.getItem(id, 'dfThinning');
}

export async function getExternalCorrosion(id: string) {
  return await POFRBIDate.getItem(id, 'dfExternalCorrosion');
}

export async function getAlkaline(id: string) {
  return await POFRBIDate.getItem(id, 'dfAlkaline');
}

export async function getValue(id: string) {
  return await POFRBIDate.getItem(id, 'pofValue');
}
