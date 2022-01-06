package com.react_map

import android.app.Notification
import android.os.Build
import android.content.Intent
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.Service

import android.os.IBinder
import android.util.Log
import androidx.annotation.RequiresApi
import com.google.firebase.database.DatabaseReference
import com.google.firebase.database.ktx.database
import com.google.firebase.ktx.Firebase


class MyForegroundService : Service() {
    private var param:Boolean = true
    private lateinit var database: DatabaseReference

    @RequiresApi(api = Build.VERSION_CODES.O)

    override fun onStartCommand(intent: Intent, flags: Int, startId: Int): Int {
        initializeDbRef()

        val CHANNELID = "Foreground Service ID"
        val channel = NotificationChannel(
            CHANNELID,
            CHANNELID,
            NotificationManager.IMPORTANCE_LOW
        )
        getSystemService(NotificationManager::class.java).createNotificationChannel(channel)
        val notification = Notification.Builder(this, CHANNELID)
            .setContentText("Service is running")
            .setContentTitle("Service enable")
            .setSmallIcon(R.drawable.common_google_signin_btn_icon_light)

        val action = intent.action
        if (action == "START"){
            Log.d("Faction",action)
        }else if(action == "STOP"){
            Log.d("Faction",action)
        }

        Thread {
            while (param) {
                Log.d("FService", "Service Foreground run__ ${intent.getStringExtra("devId")}")
                onFirebaseData(intent.getStringExtra("devId").toString())
                    try {
                        Thread.sleep(2000)
                    } catch (e: InterruptedException) {
                        e.printStackTrace()
                    }
            }
        }.start()

       startForeground(1001, notification.build())


        return super.onStartCommand(intent, flags, startId)
    }

    override fun onDestroy() {
        Log.d("Faction","stopService")
        stopForeground(true)
        param= false
        super.onDestroy()
    }

    override fun onBind(intent: Intent): IBinder? {
        return null
    }

    private fun initializeDbRef() {
        // [START initialize_database_ref]
        database = Firebase.database.reference
        // [END initialize_database_ref]
    }

    private fun onFirebaseData (devId:String){

        database.child(devId).get().addOnSuccessListener {
            Log.i("firebase", "Got value ${it.value}")
        }.addOnFailureListener{
            Log.e("firebase", "Error getting data", it)
        }
    }

}