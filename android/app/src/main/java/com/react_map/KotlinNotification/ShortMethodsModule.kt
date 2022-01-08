package com.react_map

import android.content.Intent
import android.os.Build
import android.provider.Settings
import android.provider.Settings.Secure.ANDROID_ID
import android.telephony.TelephonyManager
import android.util.Log
import android.widget.Toast
import com.facebook.react.bridge.*
import com.google.firebase.database.DatabaseReference
import com.google.firebase.database.ktx.database
import com.google.firebase.ktx.Firebase
import java.util.*

class ShortMethodsModule internal constructor(private val reactContext: ReactApplicationContext) :
        ReactContextBaseJavaModule(reactContext) {

    private lateinit var database: DatabaseReference
    var telephonyManager: TelephonyManager? = null

    fun initializeDbRef() {
        // [START initialize_database_ref]
        database = Firebase.database.reference
        // [END initialize_database_ref]
    }

    override fun getName(): String {
        return "ShortMethods"
    }

    @ReactMethod
    fun getDeviceID(successCallback: Callback) {
        var devId = Settings.Secure.getString(currentActivity?.contentResolver, ANDROID_ID)
        successCallback.invoke(devId)
    }

    @ReactMethod
    fun getFromDataBaseOnce() {
        initializeDbRef()
        database
                .child("location")
                .get()
                .addOnSuccessListener {
                    Log.i("firebase", "Got value ${it.value}")
                    Toast.makeText(
                                    reactApplicationContext,
                                    "Got value ${it.value}",
                                    Toast.LENGTH_SHORT
                            )
                            .show()
                }
                .addOnFailureListener { Log.e("firebase", "Error getting data", it) }
    }

    @ReactMethod
    fun ShowMessage(successCallback: Callback) {
        Log.d("check", Calendar.getInstance().time.toString())
        successCallback.invoke(Calendar.getInstance().time.toString())
    }

    @ReactMethod
    fun getFireBaseOnce() {
        database = Firebase.database.reference
    }

    @ReactMethod
    fun startForeGroundService() {
        val intent = Intent(getReactApplicationContext(), MyForegroundService::class.java)

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            intent.action = "START"
            intent.putExtra("devId", "location")
            getReactApplicationContext()?.startForegroundService(intent)
        }
    }

    @ReactMethod
    fun stopForeGroundService() {
        val intent = Intent(getReactApplicationContext(), MyForegroundService::class.java)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            intent.action = "STOP"
            getReactApplicationContext()?.stopService(intent)
        }
    }

    @ReactMethod
    fun startServiceLocation() {
        val intent = Intent(currentActivity, MyLocation::class.java)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            reactApplicationContext?.startForegroundService(intent)
        }
    }
}
