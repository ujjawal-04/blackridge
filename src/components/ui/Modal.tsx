"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, CheckCircle2, ShieldAlert, Eye } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type?: 'alert' | 'confirm' | 'error' | 'detail';
  onConfirm?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  type = 'alert',
  onConfirm,
  confirmLabel = 'Acknowledge',
  cancelLabel = 'Cancel',
  children
}) => {
  const logId = React.useId().replace(/[^a-zA-Z0-9]/g, '').slice(0, 6).toUpperCase();
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 overflow-y-auto w-full h-full bg-bg/95 backdrop-blur-md">
          {/* Backdrop (clickable) */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={onClose} 
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-4xl bg-[#0a0a0a] card-border p-6 md:p-10 border-blue-500/30 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20">
                  {type === 'alert' && <CheckCircle2 className="text-blue-400" size={20} />}
                  {type === 'confirm' && <AlertTriangle className="text-yellow-400" size={20} />}
                  {type === 'error' && <ShieldAlert className="text-red-400" size={20} />}
                  {type === 'detail' && <Eye className="text-blue-400" size={20} />}
                </div>
                <div>
                  <p className="mono text-[10px] text-blue-400 uppercase tracking-[0.3em] mb-1">
                    System_Output // {type.toUpperCase()}
                  </p>
                  <h3 className="text-2xl font-light uppercase tracking-tighter">
                    {title}
                  </h3>
                </div>
              </div>
              
              <button 
                onClick={onClose}
                className="p-2 border border-border hover:bg-foreground hover:text-bg transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="mb-10">
              {children}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end border-t border-border pt-8">
              {type === 'confirm' && (
                <button
                  onClick={onClose}
                  className="px-8 mono text-[10px] uppercase border border-border py-4 hover:bg-foreground/5 transition-colors"
                >
                  {cancelLabel}
                </button>
              )}
              <button
                onClick={() => {
                  if (onConfirm) onConfirm();
                  onClose();
                }}
                className={`px-12 btn-os justify-center ${
                  type === 'error' ? 'bg-red-500 text-white' : 'bg-foreground text-bg'
                }`}
              >
                {confirmLabel}
              </button>
            </div>

            {/* Decor Elements */}
            <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none">
              <span className="mono text-[8px]">LOG_ID: {logId}</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
