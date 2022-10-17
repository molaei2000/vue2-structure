// TestData
// this class handle all urls test data

export default {
  // Test data
  LOCAL_DATA: {
    /*'/api/v1/auth/login_or_register' : {"success":1,"error":"","messages":[],"data":[]},*/
  },

  getByKey(key) {
    let data;
    let errorData = {
      error: "test_data_is_null",
      success: 0,
      messages: [],
      data: {},
    };

    try {
      data = this.LOCAL_DATA[key];
    } catch (e) {
      data = "";
    }

    if (!data || data === "") data = errorData;
    return data;
  },
};
