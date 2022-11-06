import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../features/actions/auth';
import {
    Typography,
    Button,
} from "@mui/material";
import { Auth } from '../../../features/authSlice';
import LogoutButton from '../auth/LogoutButton';
import { useDispatch } from 'react-redux';

interface HeaderProps {
    auth: Auth;
}

export default function Header({ auth }: HeaderProps) {

    if (auth.isAuthenticated === null || auth.isAuthenticated === false) {
        return (
            <div>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                    BASIS
                </Typography>
                <Button
                    id="login"
                    href='/login'>
                    Login
                </Button>
                <Button
                    id="register"
                    href='/register'>
                    Register
                </Button>
            </div>
        );
    }
    else return (
        <div>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}>
                BASIS
            </Typography>
            <Button
                id="home"
                aria-haspopup="false"
                href='/'>
                Home
            </Button>
            <Button
                id="about"
                aria-haspopup="false"
                href='/about'>
                About
            </Button>
            <Button
                id="dashboard"
                aria-haspopup="false"
                href='/dashboard'>
                Dashboard
            </Button>
            <Button
                id="filtering"
                aria-haspopup="false"
                href='/filtering'>
                Filtering
            </Button>
            <LogoutButton auth={auth} />
            <hr />
        </div>
    )
}