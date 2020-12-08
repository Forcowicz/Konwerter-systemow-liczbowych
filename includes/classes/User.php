<?php
class User {
    
    public function __construct($conn) {
        $this->conn = $conn;
    }

    public function getBrowserLanguage() {
        global $browserLanguage;
        return $browserLanguage;
    }

    public function getDate() {
        return date('Y-m-d H:i:s');
    }

    public function getSessionId() {
        return session_id();
    }

    public function getUserIp()
    {
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        return $ip;
    }

    public function getUserDevice() {
        return $_SERVER['HTTP_USER_AGENT'];
    }
}