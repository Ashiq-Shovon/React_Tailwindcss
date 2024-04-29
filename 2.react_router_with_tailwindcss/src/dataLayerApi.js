export async function getVan(params) {
    const res = await fetch(`/api/vans/${params.id}`);
    if (!res.ok) {
        throw {
            message: "fetching failed",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json();
    return data.vans;
}
export async function getVans() {
    const res = await fetch("/api/vans");
    if (!res.ok) {
        throw {
            message: "Failed to Fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
  const data = await res.json();
  return data.vans;
}

export async function getHostVans() {
    const res = await fetch("/api/host/vans");
    if (!res.ok) {
        throw {
            message: "failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json();
    return data.vans;
}

export async function getHostVanDetail(params) {
    
    const res = await fetch(`/api/host/vans/${params.id}`);
    if (!res.ok) {
        throw {
            message: "failed to get van",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json();
    return data.vans;
}
