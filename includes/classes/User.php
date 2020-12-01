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
        return date('Y-m-d h:i:s');
    }

    public function getSessionId() {
        return session_id();
    }

    public function getUserIp() {
        return $_SERVER['REMOTE_ADDR'];
    }

    public function getUserDevice() {
        return $_SERVER['HTTP_USER_AGENT'];
    }
}