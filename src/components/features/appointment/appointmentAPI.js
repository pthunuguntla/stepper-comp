export async function fetchUserDetails() {
  try {
    const response = await fetch(" https://kumba.free.beeceptor.com/me");
    const data = await response.json();
    return data;
  }catch (error) {
    return { data: { status: 'fail', error } };
  }
}

export async function submitUserDetails(data) {
  try {
    const response = await fetch("https://kumba.free.beeceptor.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result
  } catch (error) {
    return { data: { status: 'fail', error } };
  }
}